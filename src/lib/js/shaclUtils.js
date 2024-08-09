import N3 from 'n3'
import { createObject } from '$lib/js/helpers'

const { namedNode } = N3.DataFactory

/// This is a dev function. Will make more abstract in future
function getAndEnrichTopLevelResults(graphstore) {
    const topLevelResults = getTopLevelResults(graphstore)

    const data = []
    for (let res of topLevelResults) {
        // get all pred-objs
        const quads = graphstore.getQuads(res, null, null, null)

        // expand and turn into a wide data row
        // have to use 2x map b/c reduce was giving me weird errors
        const keys = quads.map(r => r._predicate.id.split("#")[1])
        const values = quads.map(r => r._object.id)

        data.push({ id: res.id, ...createObject(keys, values) })
    }

    return data
}

/// Returns all top level validation results
function getTopLevelResults(store) {
    return store.getObjects(null, namedNode("http://www.w3.org/ns/shacl#result"), null)
}

function getResultDetails(store, node) {
    /// for the given node, get all validation result details, if present
    return store.getObjects(node, namedNode("http://www.w3.org/ns/shacl#detail"), null)
}

function enrichNode(store, node) {
    // get all pred-objs
    const quads = store.getQuads(node, null, null, null)

    // expand and turn into a wide data row
    // have to use 2x map b/c reduce was giving me weird errors
    const keys = quads.map(r => r._predicate.id.split("#")[1])
    const values = quads.map(r => r._object.id)

    return { id: node.id, ...createObject(keys, values) }
}

/// Given a graph (store) of a valid SHACL result graph; generate an ag-grid compatible tree ;
/// Additionally enrich nodes with data for grid columns.
function generateValidationResultTreeData(store, rootAtFocus = true) {
    let results = []

    for (let node of getTopLevelResults(store)) {
        let path = []
        // seed path
        if (rootAtFocus) { path.push(store.getObjects(node, namedNode("http://www.w3.org/ns/shacl#focusNode"), null)?.[0]?.id) }
        path.push(node.id)

        results.push({ path, ...enrichNode(store, node) })

        // recurse the details
        _recursivelyGetDetail(store, node, path, results)
    }

    return results
}


function _recursivelyGetDetail(store, node, path, results) {
    // given a node, get detail if exists
    const detailNodes = getResultDetails(store, node)

    for (let detailNode of detailNodes) {
        const newPath = [...path, detailNode.id]
        results.push({ path: newPath, ...enrichNode(store, detailNode) })

        _recursivelyGetDetail(store, detailNode, newPath, results)
    }
}

export {
    getAndEnrichTopLevelResults,
    getTopLevelResults,
    generateValidationResultTreeData
}
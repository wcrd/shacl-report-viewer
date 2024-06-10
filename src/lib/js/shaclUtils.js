import N3 from 'n3'

const { namedNode } = N3.DataFactory

/// This is a dev function. Will make more abstract in future
function getAndEnrichTopLevelResults(graphstore){
    const topLevelResults = getResultNodes(graphstore)

    const data = []
    for (let res of topLevelResults){
        // get all pred-objs
        const quads = graphstore.getQuads(res, null, null, null)

        // console.log(quads)
        const keys = quads.map(r => r._predicate.id.split("#")[1])
        const values = quads.map(r => r._object.id)

        // console.log({id: res.id, ...createObject(keys, values)})
        data.push({id: res.id, ...createObject(keys, values)})
    }

    return data
}

/// This is a dev function. Will make more abstract in future
function getResultNodes(graphstore) {
    /// Returns all top level validation results
    /// Nested result detail needs to be expanded for each top level result
    return graphstore.getObjects(null, namedNode("http://www.w3.org/ns/shacl#result"), null)
}

function createObject(keys, values) {
    const obj = Object.fromEntries(
        keys.map((key, index) => [key, values[index]]),
    );
 
    return obj;
}

export {
    getAndEnrichTopLevelResults,
    getResultNodes
}
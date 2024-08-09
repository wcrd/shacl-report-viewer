import N3 from 'n3'

const { namedNode } = N3.DataFactory


/// Fetch labels for focus and value nodes from the data graph
function enrichShaclReportFromDataGraph(validationTreeData, dataGraphStore) {
    // For each result node in the tree, see if I can fetch the label for the focus and value
    let enrichment = {}
    for (let row of validationTreeData) {
        let output = { focusNodeLabel: null, valueNodeLabel: null }
        let focusNode = row?.focusNode
        if (focusNode) {
            const focusNodeLabel = dataGraphStore.getObjects(namedNode(focusNode), namedNode("http://www.w3.org/2000/01/rdf-schema#label"), null)[0]
            output.focusNodeLabel = focusNodeLabel?.value || null;
        }

        let valueNode = row?.value
        if (valueNode) {
            const valueNodeLabel = dataGraphStore.getObjects(namedNode(valueNode), namedNode("http://www.w3.org/2000/01/rdf-schema#label"), null)[0]
            output.valueNodeLabel = valueNodeLabel?.value || null;
        }

        enrichment[row.id] = output
    }

    return enrichment
}

export {
    enrichShaclReportFromDataGraph
}
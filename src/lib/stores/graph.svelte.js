import N3 from 'n3'

const { namedNode, defaultGraph } = N3.DataFactory

class GraphStore {
    graph = $state()
    parser = new N3.Parser()

    constructor() {
        this.graph = new N3.Store()
    }

    // Will make this a $derived action on text change in future, 
    // but for now (and speed) will just manually trigger on: file upload | UI Button
    async parse(fileAsString, namedgraph = "https://graph.com/unnamed#") {
        // TODO: namedgraph should be typed / error checked.
        const namedGraphNode = namedNode(namedgraph)

        await this.parser.parse(fileAsString, (error, quad) => {
            if (quad) {
                this.graph.addQuad(quad.subject, quad.predicate, quad.object, namedGraphNode)
            } else if (error) {
                console.log("Error parsing: ", error)
            } else {
                console.log("Parsing complete.") // TODO: Remove this in prod and do something smarter
            }
        });
    }

    // Helper methods for processing SHACL result graph
    getResultNodes() {
        /// Returns all top level validation results
        /// Nested result detail needs to be expanded for each top level result
        return this.graph.getObjects(null, namedNode("http://www.w3.org/ns/shacl#result"), null)
    }

    // Couple of DEBUG helper methods
    _node(uri) { return namedNode(uri) }
    get _default() { return defaultGraph() }
    get _namedGraphs() { return Object.keys(this.graph?._graphs) }
}

export const graphStore = new GraphStore()
export const dataGraphStore = new GraphStore() // TODO combine these into a single store with named graphs.
import N3 from 'n3'

const { namedNode, defaultGraph } = N3.DataFactory

class GraphStore {
    graph = $state()
    parser = new N3.Parser()

    constructor(){
        this.graph = new N3.Store()
    }

    // Will make this a $derived action on text change in future, 
    // but for now (and speed) will just manually trigger on: file upload | UI Button
    async parse(fileAsString, namedgraph="https://graph.com/unnamed#"){
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
}

export const graphStore = new GraphStore()

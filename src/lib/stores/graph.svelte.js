import N3 from 'n3'

const { namedNode, defaultGraph } = N3.DataFactory

class GraphStore {
    graph = $state()
    parser = new N3.Parser()

    constructor(){
        this.graph = new N3.Store()
    }

    async parse(fileAsString, namedgraph=namedNode("https://graph.com/unnamed#")){
        await this.parser.parse(fileAsString, (error, quad) => {
            if (quad) {
                this.graph.addQuad(quad.subject, quad.predicate, quad.object, namedgraph)
            } else if (error) {
                console.log("Error parsing: ", error)
            } else {
                console.log("Parsing complete.") // TODO: Remove this in prod and do something smarter
            }
        });
    }
}

export const graph = new GraphStore()
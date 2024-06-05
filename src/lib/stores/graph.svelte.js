class GraphStore {
    graph = $state()

    constructor(){
        this.graph = 0
    }

    parse(fileBlob){
        return 0
    }
}

export const graph = new GraphStore()
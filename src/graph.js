class Graph {
    static graph = {};
    static addNode(nodeId) {
        this.graph.set(nodeId, {id: nodeId, from: [], to: []});
    }

    static addPathToNode(nodeId, startNodeId, endNodeId, pathId) {
        const current = this.graph.get(nodeId);
        
        if (startNodeId != null) {
            current.from.push({path: pathId, nodeId: startNodeId});
        }

        if (endNodeId != null) {
            current.to.push({path: pathId, nodeId: endNodeId});
        }
    }
}

export default Graph;
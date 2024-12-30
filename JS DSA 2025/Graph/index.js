class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vtx) {
    if (!this.adjacentList[vtx]) {
      this.adjacentList[vtx] = [];
      return true;
    }
    return false;
  }

  addEdge(vtx1, vtx2) {
    if (this.adjacentList[vtx1] && this.adjacentList[vtx2]) {
      this.adjacentList[vtx1].push(vtx2);
      this.adjacentList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  removeEdge(vtx1, vtx2) {
    if (this.adjacentList[vtx1] && this.adjacentList[vtx2]) {
      this.adjacentList[vtx1] = this.adjacentList[vtx1].filter(
        (v) => v !== vtx2
      );
      this.adjacentList[vtx2] = this.adjacentList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }
    return false;
  }

  removeVertex(vtx) {
    if (!this.adjacentList[vtx]) return undefined;

    for (let neighbor of this.adjacentList[vtx]) {
      this.adjacentList[neighbor] = this.adjacentList[neighbor].filter(
        (v) => v !== vtx
      );
    }
    delete this.adjacentList[vtx];
    return this;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "D");
g.addEdge("C", "D");
console.log(g);
g.removeVertex("D");
console.log(g);

console.log(g);

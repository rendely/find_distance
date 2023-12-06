function findDistance(graph, vertexA, vertexB) {

  if (!graph[vertexA]) return -1
  if (graph[vertexA].indexOf(vertexB) >= 0) return 1

  for (vertex of graph[vertexA]){
    const newGraph = {...graph};
    delete newGraph[vertexA]
    const search = findDistance(newGraph, vertex, vertexB)
    if (search > 0) return 1 + search;
  }

  return -1

}

if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  const graphMed = {
    jan: ["cranberry", "jamboree"],
    john: ["jambaby"],
    jambaby: ["jan", "cranberry"],
    carl: [],
    dave: ["john", "carl"],
    cranberry: [],
    hamtaro: ["jambaby", "dave"],
    jamboree: ["carl", "john"]
  };

  // console.log("Expecting: 2");
  // console.log(findDistance(graph, "jan", "carl"));

  // console.log("");

  // console.log("Expecting: -1");
  // console.log(findDistance(graph, "dave", "carl"));

  // console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graphMed, "jamboree", "hamtaro"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
// if B is adjacent to A return 1
// if B is not adjacent to A:
//   add 1 to distance tracker
//   check if B adjacent to A's adjacent nodes
//   if yes return true
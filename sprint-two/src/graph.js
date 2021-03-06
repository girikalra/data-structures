

// Instantiate a new graph
var Graph = function() {
  this.edges = {};
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for (var key in this.edges) {
    if (this.edges[key].includes(node)) {
      delete this.edges[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode + ':' + toNode] ? true : false;
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode + ':' + toNode] = [fromNode, toNode];
  this.edges[toNode + ':' + fromNode] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[toNode + ':' + fromNode];
  delete this.edges[fromNode + ':' + toNode];
    
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key]);
  }
};

Graph.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};

/*
 * Complexity: What is the time complexity of the above functions?
  // addNode: O(1)
  // contains: O(1)
  // removeNode: O(n)
  // hasEdge: O(1)
  // addEdge: O(1)
  // removeEdge: O(1)
  // forEachNode: O(n)
 */



var BinaryHeap = require('../binary.js');
var assert = require("assert");

var maxHeap = BinaryHeap.createMaxHeap();
var minHeap = BinaryHeap.createMinHeap();

maxHeap.push(1);
maxHeap.push(100);
maxHeap.push(100);
maxHeap.push(17);
maxHeap.push(19);
maxHeap.push(2);
maxHeap.push(25);
maxHeap.push(3);
maxHeap.push(36);
maxHeap.push(7);

minHeap.push(1);
minHeap.push(100);
minHeap.push(100);
minHeap.push(17);
minHeap.push(19);
minHeap.push(2);
minHeap.push(25);
minHeap.push(3);
minHeap.push(36);
minHeap.push(7);

console.log(maxHeap.getTree());
console.log(minHeap.getTree());

// console.log(maxHeap.pop());
// console.log(maxHeap.pop());
// console.log(maxHeap.pop());

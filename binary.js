function BinaryHeap(type) {
    var tree = [];

    // Private

    var upHeap = function(i) {
        var node = tree[i];
        while (i > 0) {
            var parentInd = Math.floor((i - 1) / 2);
            var parent = tree[parentInd];

            if (node >= parent) {
                tree[parentInd] = node;
                tree[i] = parent;
                i = parentInd;
            } else {
                break;
            }
        }
    };

    var downHeap = function(i) {
        // TODO
    };

    // Public

    this.getTree = function() {
        return tree;
    };

    this.push = function(node) {
        tree.push(node);
        upHeap(tree.length - 1);
    };

    this.pop = function() {
        var result = tree[0];
        var end = tree.pop();

        if (tree.length > 0) {
            tree[0] = end;
            downHeap(0);
        }
        return result;
    };

};

var bheap = new BinaryHeap(0);

bheap.push(1);
bheap.push(100);
bheap.push(100);
bheap.push(17);
bheap.push(19);
bheap.push(2);
bheap.push(25);
bheap.push(3);
bheap.push(36);
bheap.push(7);

console.log(bheap.getTree());

console.log(bheap.pop());
console.log(bheap.pop());
console.log(bheap.pop());
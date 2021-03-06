(function(exports) {

    function BinaryHeap(type, value) {
        var tree = [];
        var getValue = value || function(a) {
            return a;
        };
        var comparisons = {
            'maxheap': function(a, b) {
                return getValue(a) >= getValue(b);
            },
            'minheap': function(a, b) {
                return getValue(a) <= getValue(b);
            }
        };
        var comparison = comparisons[type];


        // Private

        var upHeap = function(i) {
            var node = tree[i];
            while (i > 0) {
                var parentInd = Math.floor((i - 1) / 2);
                var parent = tree[parentInd];

                if (comparison(node, parent)) {
                    tree[parentInd] = node;
                    tree[i] = parent;
                    i = parentInd;
                } else {
                    break;
                }
            }
        };

        var downHeap = function(i) {

            var node = tree[i];
            var length = tree.length;

            while (true) {
                var leftChildInd = 2 * i + 1;
                var rightChildInd = 2 * i + 2;
                var leftChild;
                var rightChild;
                var swapNodeInd = null;

                if (leftChildInd < length) {
                    leftChild = tree[leftChildInd];
                    if (comparison(leftChild, node)) {
                        swapNodeInd = leftChildInd;
                    }
                }

                if (rightChildInd < length) {
                    rightChild = tree[rightChildInd];
                    if (comparison(rightChild, (swapNodeInd === null ? node : leftChild))) {
                        swapNodeInd = rightChildInd;
                    }
                }

                if (swapNodeInd) {
                    tree[i] = tree[swapNodeInd];
                    tree[swapNodeInd] = node;
                    i = swapNodeInd;
                } else {
                    break;
                }
            }
        };

        // Public

        this.getTree = function() {
            return tree;
        };

        this.peek = function() {
            return tree[0];
        };

        this.peekValue = function() {
            return getValue(tree[0]);
        };

        this.size = function() {
            return tree.length;
        };

        this.push = function(node) {
            if (node instanceof Array) {
                for (var i = 0; i < node.length; i++) {
                    this.push(node[i]);
                }
            } else {
                tree.push(node);
                upHeap(tree.length - 1);
            }
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

    }

    exports.createMaxHeap = function(value) {
        return new BinaryHeap('maxheap', value);
    };

    exports.createMinHeap = function(value) {
        return new BinaryHeap('minheap', value);
    };

})(typeof exports === 'undefined' ? this['BinaryHeap'] = {} : exports);
(function(exports) {

    function BinaryHeap(type, value) {
        var tree = [];
        var getValue = value || function(a) {
            return a;
        };
        var comparisons = {
            "maxheap": function(a, b) {
                return getValue(a) >= getValue(b);
            },
            "minheap": function(a, b) {
                return getValue(a) <= getValue(b)
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

                var swapNodeInd = null;

                if (leftChildInd < length) {
                    var leftChild = tree[leftChildInd];
                    if (comparison(leftChild, node)) {
                        swapNodeInd = leftChildInd;
                    }
                }

                if (rightChildInd < length) {
                    var rightChild = tree[rightChildInd];

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

        this.size = function() {
            return tree.length;
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

        this.arrayToHeap = function(arr) {
            for (var i = arr.length - 1; i >= 0; i--) {
                this.push(arr[i]);
            }
        };

    };

    exports.createMaxHeap = function(value) {
        return new BinaryHeap("maxheap", value);
    };

    exports.createMinHeap = function(value) {
        return new BinaryHeap("minheap", value);
    };

})(typeof exports === 'undefined' ? this['BinaryHeap'] = {} : exports);
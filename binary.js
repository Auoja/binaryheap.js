(function(exports) {

    var comparisons = {
        "maxheap": function (a, b) {
            return a >= b;
        },
        "minheap": function (a, b) {
            return a <= b;
        }
    };

    function BinaryHeap(type) {
        var tree = [];
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
            // TODO
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

    };

    exports.createMaxHeap = function () {
        return new BinaryHeap("maxheap");
    };

    exports.createMinHeap = function () {
        return new BinaryHeap("minheap");
    };

})(typeof exports === 'undefined' ? this['BinaryHeap'] = {} : exports);

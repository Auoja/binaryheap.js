# binaryheap.js

A JavaScript Binary heap implementation. Supports both _Min Heap_ and _Max Heap_.

## Usage

Basic usage with integers.

```javascript

	var maxHeap = BinaryHeap.createMaxHeap();
	maxHeap.arrayToHeap([103, 12, 78, 93, 14]);
	maxHeap.push(18);
	
	var maxValue = maxHeap.pop(); // 12
```

Basic usage with more complex objects. Note that `.createMinHeap()` takes a value extraction function as an argument.

```javascript

    var minHeap = BinaryHeap.createMinHeap(function(a) {
        return a.age;
    });
    var John = {
        name: "John",
        age: 13
    };
    var Carl = {
        name: "Carl",
        age: 45
    };
    var Sarah = {
        name: "Sarah",
        age: 19
    };
    var Nathalie = {
        name: "Nathalie",
        age: 28
    };

    minHeap.arrayToHeap([John, Carl, Sarah, Nathalie]);

    var youngestPerson = minHeap.peek(); // John
    var lowestAge = minHeap.peekValue(); // 13
```


## Test

Install `mocha` either globaly or locally by running:

```
	node install
	
```

Then just run:

```
	node test
	
```
or:

```
	node test/test.js
	
```

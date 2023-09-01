# Big O Notation

Big O Notation is a fundamental tool used to find out the time complexity of algorithms. Big O Notation allows programmers to classify algorithms depending on how their run time or space requirements vary as the input size varies. Examples: Runtime Complexity for Linear Search – O(n)

<hr />

## Time Complexity

#### Example 01
Suppose we want to write a function that calculate the sum of all numbers from 1 up to (and including) some number n.

##### Solution one
```javascript
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

console.log(addUpTo(2))
```

##### Solution two
```javascript
function addUpTo(n) {
    return n * (n + 1) / 2
}

console.log(addUpTo(2))
```

What does better mean?
1. Faster
2. Less memory-intensive
3. More readable

### 1. Check faster
```javascript
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

var time1 = performance.now()
addUpTo(1000000000)
var time2 = Permissions.now()
console.log(`Time elapsed ${time2 - time1 / 1000 }seconds` )
```
This returns `Time elapsed 2.7576768... seconds`

```javascript
function addUpTo(n) {
    return n * (n + 1) / 2
}
var time1 = performance.now()
addUpTo(1000000000)
var time2 = Permissions.now()
console.log(`Time elapsed ${time2 - time1 / 1000 }seconds` )
```
This returns `Time elapsed 0.0000000000078... seconds`


So `solution one` is faster.

So first example's `big o notation` is `O(1)`
and second example's `big o notation` is `O(n)`

### Big O Notations examples

`O(2n) --> O(n)` <br />
`O(500) --> O(1)` <br />
`O(13n²) --> O(n²)` <br />
`O(5n³) --> O(n³)` <br />
`O(n + 10) --> O(n)` <br />
`O(1000n + 50) --> O(n)` <br />
`O(3n² + 5n + 8) --> O(n²)` <br />

### Big O Notations Shorthands
1. Analyzing complexity with big O can get complicated
2. There are several rules of thumb that can help
3. These rules won't ALWAYS work, but are a helpful starting point

<hr />

## Space Complexity

### Big O Notations Shorthands
1. Most primitives (booleans, numbers, undefined, null) are constant space
2. String require O(n) space (where n is the string length)
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

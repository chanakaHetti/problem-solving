# PROBLEM SOLVING

Big O Notation is a fundamental tool used to find out the time complexity of algorithms. Big O Notation allows programmers to classify algorithms depending on how their run time or space requirements vary as the input size varies. Examples: Runtime Complexity for Linear Search – O(n)


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
## Write a function which takes in a string and returns counts of each character in the string.

### Explore concrete examples

1. Start with simple examples

```javascript
charCount("aaa") -> {a:4}
charCount("hello") -> {h:1, e:1, l:2, o:1}

```

2. Progress to more complex examples

```javascript
charCount("my phone number is 154654654564") ->
charCount("Hello hi HOW are You") ->

```

3. Explore examples with empty inputs

```javascript
charCount("") ->
charCount() ->

```

4. Explore examples with invalid inputs

```javascript
charCount(true) ->
charCount(null) ->
charCount(12345) ->
charCount(undefined) ->

```

### Break it down

```javascript
charCount('aaa');
// { a: 4; }

charCount('hello');
// { h: 1, e: 1, l: 2, o: 1 }

charCount('your PIN number is 1234!');
// { 1: 1, 2: 1, 3: 1, 4: 1, b: 1, e: 1, i: 2, m: 1, n: 2: o: 1, p: 1, r: 2, s: 1, u: 2, y: 1 }

function charCount(str) {
  // 1. make an object to return at the end
  // 2. loop over string for each caharater
  // 2.1 if the char is a number/letter AND a key in the object, add one to count
  // 2.2 if the char is number/letter AND not in the object , add it and set value to 1
  // 2.3 if char is something ekse (space, period, etc...) don't do anything
  // 3. return object at the end
}
```

# Singly Linked Lists

[Singly Linke Lists demo](https://visualgo.net/en/list?slide=1)

[Singly Linke Lists Slides](https://cs.slides.com/colt_steele/singly-linked-lists)

### Singly Linked Lists PUSH menthod

```javascript
// piece if data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.list = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('there');
list.push('how');
list.push('are');
list.push('you');
```

### Singly Linked Lists POP menthod - Remove a node from the end

```javascript
// piece if data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.list = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('there');
list.push('how');
list.push('are');
list.push('you');
```

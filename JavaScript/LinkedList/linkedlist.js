class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert at head
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  //Insert at any position
  insertAt(index, data) {
    if (index < 0 || index > this.size) {
      return "Invalid Index!";
    }

    if (index === 0) {
      this.insertAtHead(data);
      return;
    }

    let newNode = new Node(data);
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }
  // Print
  print() {
    let result = "";
    let temp = this.head;

    while (temp) {
      result += `${temp.data} -> `;
      temp = temp.next;
    }
    return result;
  }
  // remove at end
  removeAtHead() {
    if (this.isEmpty()) {
      return "List is already empty.";
    }
    this.head = this.head.next;
    this.size--;
  }
  // remove at any position
  removeElement(data) {
    if (this.isEmpty()) {
      return "List is already empty.";
    }
    let current = this.head,
      prev = null;
    while (current) {
      if (current.data === data) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = prev.next;
    }
    return -1;
  }

  // search item
  searchElement(data) {
    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.data === data) {
        return index;
      }
      index++;
      curr = curr.next;
    }
    return -1;
  }
  //middle of the linkedlist
  middleNode() {
    let slow = this.head,
      fast = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }

  reverse() {
    let prev = null,
      curr = this.head,
      next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  isCycle() {
    let slow = this.head,
      fast = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  isEmpty() {
    return this.size === 0;
  }
}

let list = new LinkedList();
list.insertAtHead(40);
list.insertAtHead(50);
list.insertAtHead(60);
list.insertAtHead(65);
list.insertAt(2, 22);
list.insertAt(3, 33);
list.removeAtHead();
console.log(list.print());
console.log(list);

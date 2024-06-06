class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(15);
myStack.push(20);
myStack.push(25);


console.log(myStack.peek());
console.log(myStack.size());
myStack.pop();
myStack.push(30);
myStack.push(35);
myStack.push(40);

console.log(myStack.peek());
console.log(myStack.size());


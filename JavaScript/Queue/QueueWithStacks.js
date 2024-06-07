class QueueWithStacks {
    constructor() {
      this.stack1 = []; // Stack for enqueue operations
      this.stack2 = []; // Stack for dequeue operations (temporary storage)
    }
  
    // Add an element to the queue (enqueue)
    enqueue(item) {
      this.stack1.push(item);
    }
  
    // Remove an element from the queue (dequeue)
    dequeue() {
      if (this.stack2.length === 0) {
        // Move all elements from stack1 to stack2 (reversing the order)
        while (this.stack1.length) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      if (this.stack2.length === 0) {
        // Queue is empty
        return undefined;
      }
  
      return this.stack2.pop();
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    // Get the size of the queue (number of elements)
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
  
  // Example usage
  const myQueue = new QueueWithStacks();
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  myQueue.enqueue(40);
  myQueue.enqueue(50);
  myQueue.enqueue(60);
  
  console.log(myQueue.dequeue()); // Output: 10
  console.log(myQueue.dequeue()); // Output: 20
  console.log(myQueue.size()); // Output: 1
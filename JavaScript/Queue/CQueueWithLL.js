class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularQueue {
    constructor(maxSize) {
      this.maxSize = maxSize;
      this.front = null;
      this.rear = null;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === null;
    }
  
    // Check if the queue is full
    isFull() {
      return (this.rear + 1) % this.maxSize === this.front;
    }
  
    // Enqueue an element
    enqueue(data) {
      if (this.isFull()) {
        throw new Error("Queue Overflow");
      }
  
      const newNode = new Node(data);
      if (this.isEmpty()) {
        // Queue is empty, set both front and rear to the new node
        this.front = newNode;
      } else {
        // Add the new node at the rear
        this.rear.next = newNode;
      }
      // Update the rear to point to the new node
      this.rear = newNode;
      this.rear.next = this.front; // Make it circular
    }
  
    // Dequeue an element
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue Underflow");
      }
  
      const temp = this.front;
      if (this.front === this.rear) {
        // Queue has only one element, reset front and rear
        this.front = this.rear = null;
      } else {
        // Move the front pointer to the next node
        this.front = this.front.next;
        // Fix the circular link for the last node
        this.rear.next = this.front;
      }
      return temp.data;
    }
  
    // Get the front element without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is Empty");
      }
      return this.front.data;
    }
  }
  
  // Example usage
  const queue = new CircularQueue(5);
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.peek()); // Output: 20
  queue.enqueue(40);
  queue.enqueue(50);
  
  console.log(queue.dequeue()); // Output: 20
  console.log(queue.dequeue()); // Output: 30
  console.log(queue.dequeue()); // Output: 40
  console.log(queue.dequeue()); // Output: 50
  
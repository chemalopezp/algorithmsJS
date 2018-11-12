class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    };
    pop() {
        return this.stack.pop();
    }
    isEmpty() {
        if (this.stack === undefined || this.stack.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    size() {
        return this.stack.length;
    }
};

// Test for Stack
// let stack = new Stack;

// console.log(stack);
// console.log(stack.isEmpty());
// stack.push(12);
// stack.push(23);
// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.isEmpty());

class Queue {
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
    }
    enqueue(item) {
        // Move all items to Stack 1
        // while (!this.outStack.isEmpty()) {
        //     this.inStack.push(this.outStack.pop());
        // }
        // Push stack 1
        this.inStack.push(item);
    }
    dequeue() {
        // Move all items to Stack 2, only if Stack 2 is empty
        if (this.outStack.size() == 0) {
            while (!this.inStack.isEmpty()) {
                this.outStack.push(this.inStack.pop());
            }
        }
        // Pop stack 2
        return this.outStack.pop();
    }
}

// Test for queue

let queue = new Queue;

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
//Stack 

class Stack {
    constructor(){
        this.stack = []
    }

    push(num){
        return this.stack.push(num) && this.printStack();
    }

    pop(){
        if(this.isEmpty()) return "Stack is Empty!";

        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()) return "Stack is Empty!";

        return this.stack[this.size() - 1];
    }

    isEmpty(){
        if(this.size() === 0) return true;
    }

    size(){
        return this.stack.length;
    }

    printStack(){
        let stackString = "";
        for (let i = 0; i < this.size(); i++) {
            stackString += this.stack[i] + ", "
        }
        console.log(stackString);
    }
}

const stack = new Stack();

console.log(stack.push(20));
console.log(stack.push(50));
console.log(stack.push(40));
console.log(stack.push(80));


console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());


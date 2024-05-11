//Queue

class Queue{
    constructor(){
        this.queue = [];
    };

    enqueue(item){
        return this.queue.push(item) && this.printQueue();
    };

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty!";
        };
        return this.queue.shift();
    };

    front(){
        if(this.isEmpty()) return "Queue is Empty!";

        return this.queue[0];
    }

    isEmpty(){
        if(this.queue.length === 0) return true;
    };

    size(){
        return this.queue.length;
    };

    printQueue(){
        let queueString = "";
        for (let i = 0; i < this.size(); i++) {
            queueString += this.queue[i] + ", "
        }
        console.log(queueString)
    }
};

const queue = new Queue();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.enqueue(40));

console.log(queue.front());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
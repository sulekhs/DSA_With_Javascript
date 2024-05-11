//Queue Using Stack Implementation


const QueueusingStack = function(k){
    this.stack1 = [];
    this.stack2 = [];
};

QueueusingStack.prototype.enQueue = function(item){
    return this.stack1.push(item);
}

QueueusingStack.prototype.deQueue = function() {
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){          
            this.stack2.push(this.stack1.pop())    
        }
    }
    return this.stack2.pop();                          
};

QueueusingStack.prototype.front = function(){
    if(this.stack2.length === 0){
        while(this.stack1.length > 0){          
            this.stack2.push(this.stack1.pop())    
        }
    }
    return this.stack2[this.stack2.length - 1];                          
};

QueueusingStack.prototype.isEmpty = function(){
    return this.stack2.length === 0;
};

const queue = new QueueusingStack(3);
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);

console.log(queue.deQueue());

//queue.enQueue(40);

console.log(queue.front());

console.log(queue.isEmpty());


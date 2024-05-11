//Circular Queue Implementation

//Circular Queue is a linear data structure in which the operations are performed based on first in first out principal and the
//last position is connected back to first position to make a circle

const CircularQueue = function(k){
    this.queue = [];
    this.size = k;
};

CircularQueue.prototype.enQueue = function(item){
    if(this.size === this.queue.length) return false;
    return this.queue.push(item);
}

CircularQueue.prototype.deQueue = function() {
    if(this.queue.length === 0) return false;
    return this.queue.shift();
};

CircularQueue.prototype.front = function(){
    if(this.queue.length === 0) return -1;
    return this.queue[0];
};

CircularQueue.prototype.rear = function(){
    if(this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
};

CircularQueue.prototype.isEmpty = function(){
    return this.queue.length === 0;
};

CircularQueue.prototype.isFull = function(){
    return this.size === this.queue.length;
};

const obj = new CircularQueue(3);
console.log(obj.enQueue(10));
console.log(obj.enQueue(20));
console.log(obj.enQueue(30));

console.log(obj.deQueue());

console.log(obj.enQueue(40));

console.log(obj.front(), obj.rear());

console.log(obj.isEmpty());

console.log(obj.isFull());



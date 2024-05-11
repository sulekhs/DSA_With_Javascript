//Stack Using Queue Implementation


const StackUsingQueue = function(k){
    this.q1 = [];
    this.q2 = [];
};

StackUsingQueue.prototype.push = function(item){
    while(this.q1.length !== 0){          
        this.q2.push(this.q1.shift())    
    }
    this.q1.push(item);                   
    while(this.q2.length !== 0){
        this.q1.push(this.q2.shift())      
    }
}

StackUsingQueue.prototype.pop = function() {
    if(this.q1.length === 0) return "Stack is Empty!";
    return this.q1.shift();                          
};

StackUsingQueue.prototype.top = function(){
    if(this.q1.length === 0) return -1;
    return this.q1[0];                                 
};

StackUsingQueue.prototype.isEmpty = function(){
    return this.q1.length === 0;
};

const stack = new StackUsingQueue(3);
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());

//stack.push(40);

console.log(stack.top());

console.log(stack.isEmpty());


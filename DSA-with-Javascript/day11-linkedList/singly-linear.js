//Singly Linear LinkedList


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    };
};

class SinglyLinearLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    };

    isEmpty() {
        return this.size === 0;
    };

    getSize() {
        return this.size;
    };

    addNodeAtFirstPos(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        };
        this.size++;
    };

    addNodeAtLastPos(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            };
            prev.next = newNode;
        };
        this.size++;
    };

    addNodeAtSpecificPos(value, index){
        const newNode = new Node(value);
        if(index < 0 || index > this.size){
            console.log('Exceeded Max Size!');
            return;
        }else if(index === 0){
            this.addNodeAtFirstPos(value);
        }else if(index === this.getSize()){
            this.addNodeAtLastPos(value);
        }else {
            let prev = this.head;    
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            };
            newNode.next = prev.next;
            prev.next = newNode;
            this.size++;
        };
    };

    deleteAtFirstPos(){
        if(this.head !== null){
            if(this.head.next === null){ // if list has one element
                this.head = this.head.next;
            }else{ //if list has more elements
                let prev = this.head;
                this.head = this.head.next;
                prev = null;
            };
            this.size--;
        };
    };

    deleteAtLastPos(){
        if(this.head !== null){
            if(this.head.next === null){ // if list has one element
                this.head = this.head.next;
            }else{ //if list has more elements
                let prev = this.head;
                while(prev.next.next !== null){
                    prev = prev.next;
                };
                prev.next = null;
            };
            this.size--;
        };
    };

    deleteAtSpecificpos(index){
        if(index < 0 || index > this.size){
            console.log('Exceeded Max Size!');
            return null;
        }else if(index === 0){
            this.deleteAtFirstPos();
        }else if(index === this.getSize()){
            this.deleteAtLastPos();
        }else {
            let prev = this.head; 
            let removedNode;   
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            };
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
        };
    };

    removeByvalue(value) {
        if(this.isEmpty()){
            console.log('List is Empty!');
            return null;
        };
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
        }else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            };
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next;  
                this.size--;
                return value;
            };
            return null;
        };
    };

    searchByValue(value) {
        if(this.isEmpty()){
            console.log('List is Empty!');
            return null;
        };
        let i = 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i;
            };
            curr = curr.next;
            i++;
        };
        return -1;
    };

    reverseLinkedList(){
        if (this.isEmpty()) {
            console.log('list is empty');
            return null;
        };
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        };
        this.head = prev;
    };

    printList(){
        if (this.isEmpty()) {
            console.log('List is Empty!');
        } else {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += `${curr.value}`;
                curr = curr.next;
            };
            console.log(list);
        };
    };
};

const singlylinkedList = new SinglyLinearLinkedList();
console.log('list is empty? ', singlylinkedList.isEmpty());
console.log('size? ', singlylinkedList.getSize());
singlylinkedList.addNodeAtFirstPos(10);
singlylinkedList.printList();
singlylinkedList.addNodeAtFirstPos(20);
singlylinkedList.printList();
singlylinkedList.addNodeAtFirstPos(30);
singlylinkedList.printList();
singlylinkedList.addNodeAtFirstPos(40);
singlylinkedList.printList();
singlylinkedList.addNodeAtLastPos(5);
singlylinkedList.printList()
singlylinkedList.addNodeAtSpecificPos(15,5);
singlylinkedList.printList();

singlylinkedList.deleteAtSpecificpos(6);
singlylinkedList.printList();

console.log('removedvalue ',singlylinkedList.removeByvalue(20));
singlylinkedList.printList();

console.log('search value at index ',singlylinkedList.searchByValue(10));
singlylinkedList.printList();

singlylinkedList.reverseLinkedList();
singlylinkedList.printList();

console.log('size? ', singlylinkedList.getSize());





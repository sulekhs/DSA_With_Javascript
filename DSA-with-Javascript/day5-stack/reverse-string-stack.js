//Input "the sky is blue"  =>  Output "blue is sky the"

function reverseUsingStack(str){
    let splits = str.split(" ");
    console.log(splits) //array['the', 'sky', 'is', 'blue']
    let stack = [];

    for(i of splits){
        stack.push(i);
    }
    console.log(stack)

    let finals = "";

    while(stack.length){
        finals = finals + " " + stack.pop();
        console.log(finals)
    };

    return finals;
};
const reverseStr = reverseUsingStack("the sky is blue");
console.log(reverseStr);
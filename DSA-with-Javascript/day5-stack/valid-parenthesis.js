//Given a string s containing just the chaaracters '(', ')', '{', '}', '[', ']'
//Open brackets must be closed by the same brackets
//Input "()"  => output true
//Input "[]"  => output true
//Input "(]"  => output false

function validParenthesis(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if(char === "(" || char === "[" || char === "{"){
            stack.push(char);
        }else if(char === ")" || "]" || "}"){
            if(isEmpty(stack)){
                return false;
            }
            
            const top = stack.pop();

            if(
                (char === ")" && top !== "(") ||
                (char === "]" && top !== "[") ||
                (char === "}" && top !== "{")
            ) {
                return false;
            }
        }
    }

    return isEmpty(stack);
};

function isEmpty(stack){
    return stack.length === 0;
}
const string1 = "([]{})";
const valid = validParenthesis(string1);
console.log(valid);
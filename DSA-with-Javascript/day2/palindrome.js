
function isPalindrome(x){
    return x<0 ? false : x === +x.toString().split("").reverse().join("")
}

const num = isPalindrome(121);

console.log(num)
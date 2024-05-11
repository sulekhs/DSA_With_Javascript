//factorial using recursion

const recursion = (n) => {
    if(n<=0) return 1
    return n * recursion(n-1);
};

const factorial = recursion(5);
console.log(factorial)
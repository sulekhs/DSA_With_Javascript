
//Fibonacci Series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233....
//F(0)=0
//F(1)=1
//F(n)=F(n-1) + F(n-2)

//Input n = 3 -> output 2
// let arr = []
// const fibonacci = (n) => {
//     arr = [0,1]

//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     console.log(arr);
//     //console.log(arr[n])
//     return arr[n];
// }

// const output = fibonacci(3);
// console.log(output)


//Using Recursion
// const fibonacci = (n) => {
//     if(n <= 1) return n;

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const output = fibonacci(3);
// console.log(output)

//using ternanry 
// const fibonacci = (n) => ( n <= 1 ? n : fibonacci(n - 1) + fibonacci(n -2 ) )
//fibonacci(3);
//console.log(fibonacci(3))
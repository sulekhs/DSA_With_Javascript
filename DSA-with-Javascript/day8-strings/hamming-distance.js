//Hamming Distance
//Given Strings x and y, return the hamming distance between them

//Input : x = "hello", y = "hwllr"
//Output: 2
// Explaination:
//  (hello)
//  (hwllr)
//    !  !

// function hammingDistance(x, y){
//     if(x.length !== y.length) return false
    
//     let distance = 0;

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] !== y[i]) {
//             distance++;
//         };
//     };
//     return distance;
// };
// console.log(hammingDistance("hello","hwllr"));


//Hamming Distance by Bits

// Input : 1 0001 
// Input : 4 0100
// Output: 2

function hammingDistance(x, y){
    x = x.toString(2);
    y = y.toString(2);

    if(x.length < y.length){
        while (x.length !== y.length) {
            x = "0" + x;
        }
    }else {
        while (y.length !== x.length) {
            y = "0" + y;
        }
    }
    
    let distance = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            distance++;
        };
    };
    return distance;
};
console.log(hammingDistance(1,4));

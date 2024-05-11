const secondLarget = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
};

const secondLargest = secondLarget([12,48,1,10,34,35]);
console.log(secondLargest)


// const secondSmallest = (arr) => {
//     let smallest = Number.POSITIVE_INFINITY;
//     let secondSmallest = Number.POSITIVE_INFINITY;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < smallest){
//             secondSmallest = smallest;
//             smallest = arr[i];
//         }else if(arr[i] !== smallest && arr[i] < secondSmallest){
//             secondSmallest = arr[i];
//         }
//     }
//     return secondSmallest;
// };

// const secSmallest = secondSmallest([12,48,1,10,34,35]);
// console.log(secSmallest)


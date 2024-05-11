//input [2,3,4,7,11]  k=5
//output = 9

// Explaination : The missing positive integers are [1,5,6,8,9,10,12,13,...]
// Therefore the 5th missing positive integer is 9


function findKthPositive(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] <= k + count){
            count++;
        };
    };
    return k + count;
};

console.log(findKthPositive([2,3,4,7,11], 5))
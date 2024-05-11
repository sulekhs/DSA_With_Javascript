//Given an integer array num. Find the SubArray with the largest sum
//and return its Sum

//Input [-2,1,-3,4,-1,2,1,-5,4]  => Output 6,   [4,-1,2,1]
//Input [5,4,-1,7,8]  => Output 23,   [5,4,-1,7,8]

// function maxSubArray(nums){
//     let maxSum = nums[0];
//     let startIdx = 0;
//     let endIdx = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         let currentSum = 0;
//         for (let j = i; j < nums.length; j++) {
//             currentSum = currentSum + nums[j];
//             if(currentSum > maxSum){
//                 maxSum = currentSum;
//                 startIdx = i;
//                 endIdx = j;
//             }
//         }
//     }
//     return {
//         sum: maxSum,
//         subArray: nums.slice(startIdx, endIdx + 1)
//     }
// };
// const maxSubarray = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
// console.log(maxSubarray)


//Kadane's Algorithm

function maxSumSubArray(nums){
    let sum = 0;
    let max = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if(sum > max){
            max = sum;
        };
        if(sum < 0){
            sum = 0;
        };
    }
    return max;
}
const maxSubarray = maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(maxSubarray)

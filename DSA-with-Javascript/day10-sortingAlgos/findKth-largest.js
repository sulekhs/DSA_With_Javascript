//Kth largest 
//Input [3,2,1,5,6,4]  k =2
//output = 5

//Input = [3,2,3,1,2,4,5,5,6] k = 4
//Output = 4
function findKthlargest(nums, k) {
    nums.sort((a,b) => a -b);  //[1,2,2,3,3,4,5,5,6]
    return nums[nums.length - k];
};

console.log(findKthlargest([3,2,3,1,2,4,5,5,6], 4));
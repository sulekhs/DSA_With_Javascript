//Subsets ( Back-Tracking using recursion )
//Given an integer array of unique elements, return all possible subsets (the power set)
//The Solution Set must not contain duplicate susets. 
//Return the Solution in any order

//Input [1,2,3]  => Output [[], [1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//Input [0]      => Output [[], [0]]


const subset = (nums) => {
    let temp = [];
    let result = [];

    const recursiveSubsets = (nums, i) => {
        if(i === nums.length){
            return result.push([...temp])
        }

        temp.push(nums[i]);
        recursiveSubsets(nums, i + 1);
        temp.pop();
        recursiveSubsets(nums, i + 1);
    }

    recursiveSubsets(nums, 0)
    return result
}
const backtrack = subset([1,2,3]);
console.log(backtrack)
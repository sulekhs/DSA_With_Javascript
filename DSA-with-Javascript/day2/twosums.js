//Given an array of integers num and an target
//return indices of two numbers such that they add upto target

//Input[2,7,11,5] target=9,  -> output[0,1]

// const twoindicesSum = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) return [i,j]
//         }
//     }
// };

// console.log(twoindicesSum([2,9,7,11],9));


//using object
// {
//     2: 0  // 26-2=24 doesn't exist in array. therefore assign index of 2
//     11: 1  // 26-11=15 doesn't exist in array. therefore assign index of 11
//     9: 2 // 26-9=15 doesn't exist in array. therefore assign index of 9
//     15:   // 26-15=11 exists in array, therefore return index of [obj[11],3] => [2,3]
// }

let obj = {}
const twoindicesSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(obj[target - num] >= 0){
            console.log(obj[target - num])
            return [obj[target - num], i]
        }else {
            obj[num] = i;
        }
    }
};

console.log(twoindicesSum([2,11,7,15],26));
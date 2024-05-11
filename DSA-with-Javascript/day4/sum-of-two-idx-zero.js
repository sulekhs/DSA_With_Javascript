//Sum of two elements Equals 0 in Array
//Input [1, -4, 2, 4, 8] => Output = -4, 4

const sumOfTwoIdxEqZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let sum = 0;
    while(left < right){
        sum = arr[left] + arr[right];
        if(sum === 0){
            console.log(arr[left]);
            console.log(arr[right]);
            break;
        }
        left++;
        right--
    }
};

sumOfTwoIdxEqZero([1,-4,2,4,8]);
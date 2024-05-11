//rotate by K if Input arr[1,2,3,4,5,6,7] and k=3 Rotate by 3 steps
//Output arr[5,6,7,1,2,3,4]


// const rotateByk = (arr, k) => {  //O(nlogn)
//     let size = arr.length;

//     if(size > k){
//         k = k % size
//     }

//     let rotate = arr.splice(size - k, size)

//     arr.unshift(...rotate)

//     return arr;
// }

// const rotatedArray = rotateByk([1,2,3,4,5,6,7], 3);
// console.log(rotatedArray);


//[1,2,3,4,5,6,7] => k=3 => [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4] 
//reverse in 3 steps
//temp = arr[left=0] = 1
//arr[0++] = arr[right=6] = 7
//arr[6--] = temp=1
//left++ = 1
//right-- = 5

const rotateByk = (arr, k) => { //O(n)
    let size = arr.length;

    if(size > k ){
        k = k % size
    }

    reverseNum(arr, 0, arr.length - 1);
    reverseNum(arr, 0, k - 1);
    reverseNum(arr, k, arr.length - 1);

    return arr;
}

const reverseNum = (arr, left, right) => {
    while(left < right){
        const temp = arr[left];
        arr[left++] = arr[right];
        arr[right--] = temp;
    }
};
const rotatedArray = rotateByk([-1,100,3,99], 2);
console.log(rotatedArray);

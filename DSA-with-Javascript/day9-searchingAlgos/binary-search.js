//Binary search

//Input [-1,2,45,58,85,97]  target = 45
//output 2  index

function binarySearch(arr,target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if(arr[middle] === target){
            return middle;
        }else if(arr[middle] < target){
            start = middle + 1;
        }else {
            end = middle - 1;
        };
    };
    return -1;
};

console.log(binarySearch([-1,2,45,58,85,97], 45))

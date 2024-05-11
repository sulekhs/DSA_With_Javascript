//merge Sort


function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return mergeArray(mergeSort(left), mergeSort(right));
};

function mergeArray(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        if(left[0] <= right[0]){
            sortedArray.push(left.shift());
        }else {
            sortedArray.push(right.shift())
        };
    };
    return [...sortedArray, ...left, ...right];
};

console.log(mergeSort([-6,8,2,7,9,5,43]));

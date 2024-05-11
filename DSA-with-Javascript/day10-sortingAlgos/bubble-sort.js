//Bubble sort
//O(n^2)

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j+1] < arr[j]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            };
        };
    };
    return arr;
};

console.log(bubbleSort([29,10,14,37,14]));


//Bubble sort with flag logic for already sorted array
//O(n) for already sorted with flag

function bubbleSortFlag(arr) {
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        flag = 0;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j+1] < arr[j]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                flag = 1;
            };
        };
    };
    return arr;
};

console.log(bubbleSortFlag([10,14,14,29,37]));
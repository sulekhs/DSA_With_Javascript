//Linear Search

//Input [45,78,12,63,89,45,61] target = 89
//Output 4  index

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr.length === 0) return false;

        if(arr[i] === target){
            return i;
        };
    };

    return -1;
};

console.log(linearSearch([45,78,12,63,89,45,61],89));


//global Search in linear

function globalSearch(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(target === arr[i]){
            result.push[i];
        }
    };
    if(result.length === 0) return -1
    return result;
};

console.log(globalSearch([45,78,12,63,89,45,61],89))
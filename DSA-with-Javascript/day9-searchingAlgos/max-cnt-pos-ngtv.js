//Input [-7-5,-1, 5, 8]
//Output 3
//return max count between positive and negative

function maxPosNeg(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while(low < high){
        mid = low + (high - 1) / 2;

        if(arr[mid] < 0)
            low = mid + 1;
        else if(arr[mid] > 0)
            high = mid - 1;
    };
    return Math.max(low, arr.length - 1);
};

console.log(maxPosNeg([-7-5,-1, 5, 8]))
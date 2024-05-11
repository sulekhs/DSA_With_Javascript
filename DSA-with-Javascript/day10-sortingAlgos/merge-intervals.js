// Given an Array of intervals where interval[i] = [start, end],
// merge all the overlapping intervals and return an array of the non-overlappingintervals
// that cover all the intervals in the input

// Input : intervals = [[1,3], [2,6], [8,10], [15,18]]
// Output: [[1,6], [8,10], [15,18]]
// Explaination : Since intervals [1,3] and [2,6] overlap, merge them into [1,6]

function merge(intervals) {
    const start = 0;
    const end = 1;

    intervals.sort((a,b) => a[start] - b[start]);
    
    const mergeIntervals = [];
    let mergeStart = intervals[0][start];
    let mergeEnd = intervals[0][end];

    for (let i = 1; i < intervals.length; i++) {
        const subsequentIntervals = intervals[i];

        if(subsequentIntervals[start] <= mergeEnd){
            mergeEnd = Math.max(mergeEnd,subsequentIntervals[end]);
        }else {
            mergeIntervals.push([mergeStart, mergeEnd]);
            mergeStart = subsequentIntervals[start];
            mergeEnd = subsequentIntervals[end];
        };
    };

    mergeIntervals.push([mergeStart, mergeEnd]);
    return mergeIntervals;
};

console.log(merge([[1,3], [2,6], [8,10], [15,18]]));
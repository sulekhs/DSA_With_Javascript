//range of numbers using recursion

//rangeofnumbers(1,5) => [1,2,3,4,5]
//rangeofnumbers(1,4) => [1,2,3,4]
//rangeofnumbers(1,3) => [1,2,3]
//rangeofnumbers(1,2) => [1,2]
//rangeofnumbers(1) => [1]
//rangeofnumbers(1,0) => []

const rangeofnumbers = (start, end) => {
    if(end < start) return []
    const numbers = rangeofnumbers(start, end - 1);
    numbers.push(end);
    return numbers;
};

const range = rangeofnumbers(0,5);
console.log(range);
//arr.sort()

const arr = ["orange", "apple", "dragonfruit", "mango", "dessert"];

console.log(arr.sort());

const nums = [10,5,18,1,27];
//console.log(nums.sort());// Output [1,10,18,27,5] not sorted because it is converted in strings
// to sort we have to use compare function

function compare(a,b) {
    return a - b;
};
console.log(nums.sort(compare));

function compareObjects(a,b) {
    return a.age - b.age;
};

const person = [
    {name: "Srk", age: 25},
    {name: "tripan", age: 14},
    {name: "akash", age: 18},
    {name: "ruck", age: 6},
];
console.log(person.sort(compareObjects))

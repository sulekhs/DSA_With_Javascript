const str = "strings topic";

const strings = `this string is written with backticks
we can write on any line and it is valid`;

const tmpLiteral = `we can include any variable value dynamically ${str}`;

function tmp(string, username, work){
    console.log(`${string} : ${username} : ${work}`);
    return;
};
const username = "Doe";
const work ="dev"
tmp`"calling function with ${username} and ${work}`;

let accessStr = "Accessing value of str";

accessStr[0];
accessStr.charAt(0);

for (let i = 0; i < accessStr.length; i++) {
    const element = accessStr[i];
    console.log(element);
};


//Modifying
accessStr[3] = "h"; //Can't do this

//returns new string replacing new modified string value we want
console.log(accessStr.replace("Accessing", "Modifying"));
//returns new value we want in string with replacing everywhere in string
console.log(accessStr.replaceAll("e", "a"));

//concat
console.log(accessStr.concat(" also concating"));

const st = "  Trim space    "
console.log(st.trim())


//Searching
console.log(accessStr.indexOf("r"));//first occurence of r
console.log(accessStr.lastIndexOf("s"));//last occurence of s

console.log(accessStr.startsWith("A"));
console.log(accessStr.endsWith("r"));


//Extracting Substring
console.log(accessStr.substring(13));
console.log(accessStr.slice(7,21));

//Converting
let obj = { name:'doe'};
const converted = String(obj);//Not right way [object object]
console.log(JSON.stringify(obj)); //correct way

console.log(accessStr.toLowerCase());
console.log(accessStr.toUpperCase());

console.log(accessStr.charCodeAt(0)); //65
console.log(String.fromCharCode(65)); //A

let str1 = "app";
let str2 = "app";
console.log(str1.localeCompare(str2));

console.log(accessStr.includes("value"));

console.log(accessStr.split(" ")) //[ 'Accessing', 'value', 'of', 'str' ]

const arr = ["web", "dev"];
console.log(arr.join(" and "));
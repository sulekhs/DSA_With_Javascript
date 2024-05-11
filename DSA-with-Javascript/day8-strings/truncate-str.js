// //Truncate the text
// Write a function truncate that checks the length of given string - str and 
// if it surpases a specified a maximum length maxLength, it replaces the end of the string
// with the elipsis character "..." so that the length matches the maximum length

//Input str = "Access the value", maxLength=6
//Output = "Access..."  

function truncate(str, maxLength){
    if(str.length > maxLength){
        return str.slice(0, maxLength) + "..."
    }else {
        return str;
    };
};

console.log(truncate("Access the value", 6))
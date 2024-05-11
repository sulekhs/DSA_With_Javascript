//Input"hello"
//OUTPUT "olleh"

//reverseString("hello") => reverseString("ello") + h
//reverseString("ello") => reverseString("llo") + e
//reverseString("llo") => reverseString("lo") + l
//reverseString("lo") => reverseString("o") + l
//reverseString("o") => reverseString("ello") + 0
//reverseString("") => ""

const reverseString = (str) => {
    if(str === "") {
        return ""
    }else{
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

const reverse = reverseString("hello");
console.log(reverse)
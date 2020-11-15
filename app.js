function reverseString(str) {

    // first way 
    // var strArr = str.split("");
    // var reversedStrArr = strArr.reverse();

    // var reverseString = reversedStrArr.join("");
    // return reverseString;


    // second way 
    // return str.split("").reverse().join("");

    // third solution no methods
    let final = "";
    for(let i = str.length -1; i >= 0; i--) {
        final += str[i];
        console.log(final);
    }
}

console.log(reverseString("hello"));
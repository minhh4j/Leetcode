var lengthOfLastWord = function(s) {
    let string = s.trim().split(" ")
    let length = string[string.length-1].length
    return length ; 
};
console.log(lengthOfLastWord("Hello World"))
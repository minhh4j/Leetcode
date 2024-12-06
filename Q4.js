var arrayStringsAreEqual = function(word1, word2) {
    let arry1  =word1.join("")
    let arry2  =word2.join("")
    if(arry1 === arry2){
        return true
    }
    return false ;
};
console.log(arrayStringsAreEqual(["ab", "c"] , ["a", "bc"]))
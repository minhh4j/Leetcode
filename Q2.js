var detectCapitalUse = function(word) {
    if(word === word.toUpperCase()){
        return true ;
    }
    if(word === word.toLowerCase()){
        return true ;
    }
    if(word.split("").at(0).toUpperCase()+word.slice(1).toLowerCase() === word){
        return true ;
    }
    return false ;
};
console.log(detectCapitalUse("USA"))
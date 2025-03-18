var getNoZeroIntegers = function(n) {
    let a = n.toString()
    let b = a.includes('0')
    for(let i = 1 ; i < n  ; i++){
        let  o = n - i ;
        if(!b && !b){
        return [o,i]
        }
    }
};
console.log(getNoZeroIntegers(2))

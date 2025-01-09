var maximum69Number  = function(num) {
    let strnum = num.toString().split("")
    
    for(let i = 0 ; i < strnum.length ; i++){
        if(strnum[i] === '6'){
            strnum[i] = '9'
            break ;
        }
    }
    return parseInt(strnum.join(''),10)
};

console.log(maximum69Number(9669));

function isPerfectNumber(num) {
  let count = 0;
  for(let i = 0 ; i < num ; i++){
    if(num%i===0) {
        count += i; 
    }
  }
  if(num === count){
    return true ;
}
  return false
}
console.log(isPerfectNumber(28));

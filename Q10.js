var sumOfUnique = function(nums) {
    let a = nums.filter((item) => nums.indexOf(item) === nums.lastIndexOf(item))
    let sum =a.reduce((a,b) => a+b , 0);
    return a ? sum : 0 ;
};

console.log(sumOfUnique([1,2,2,3,1,4,4,3]))
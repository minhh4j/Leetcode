var sortedSquares = function(nums) {
    let sqr = nums.map((item) => item * item)
    let sort = sqr.sort((a,b) => a-b)
    return sort;
};
console.log(sortedSquares([-4,-1,0,3,10]))
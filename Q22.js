var divideArray = function(nums) {
    nums.sort((a,b) => a-b)
    for(let i = 0 ; i<nums.length ; i+= 2){
        if(nums[i] != nums[i + 1]){
            return false
        }
    }
    return true ; 
};
console.log(divideArray([3,2,3,2,2,2]))
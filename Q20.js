var findDuplicate = function(nums) {
    let result = 0 
    for(let i = 0 ; i<nums.length  ; i++){
        for(let j = i +1 ; j<nums.length ; j++){
            if(nums[j] === nums[i]){
                result = nums[j]
                return result 
            }
        }
    }
return -1
};
console.log(findDuplicate([3,1,2,5,2]));

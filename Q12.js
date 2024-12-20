var sortColors = function(nums) {
    for(let i = 0 ; i<nums.length ; i++){
        for(let j = i ; j<nums.length ; j++){
            if(nums[i] > nums[j]){
                let temp = nums[j]
                    nums[j] = nums[i]
                    nums[i] = temp   
            }
        }
    }
    return nums
};

console.log(sortColors([0,1,0,2,1,2]))
function buildArray(nums) {
    return nums.map((_ , i) => nums[nums[i]]);
}

console.log(buildArray([0, 2, 1, 5, 3, 4]));
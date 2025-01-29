function sumOfSubarrays(nums) {
    let totalSum = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const start = Math.max(0, i - nums[i]);
        for (let j = start; j <= i; j++) {
            totalSum += nums[j];
        }
    }

    return totalSum;
}

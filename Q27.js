
function numIdenticalPairs(nums) {
    const count = {}
    let goodPairs = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (count[num] === undefined) {
            count[num] = 0;
        }
        goodPairs += count[num]
        count[num]++
    }

    return goodPairs
}
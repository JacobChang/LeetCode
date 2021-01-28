function removeDuplicates(nums: number[]): number {
    let len = nums.length;
    if (nums.length === 0 || nums.length === 1) {
        return len;
    }

    let count = 1;
    let last = nums[0];
    for (let i = 1; i < len; i++) {
        let curr = nums[i];
        if (curr === last) {
            continue;
        } else {
            nums[count] = curr;
            count++;
            last = curr;
        }
    }

    return count;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

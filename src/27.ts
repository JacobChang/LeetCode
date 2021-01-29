function removeElement(nums: number[], val: number): number {
    let len = nums.length;

    let count = 0;
    for (let i = 0; i < len; i++) {
        let curr = nums[i];
        if (curr === val) {
            continue;
        } else {
            nums[count] = curr;
            count++;
        }
    }

    return count;
};

console.log(removeElement([0,0,1,1,1,2,2,3,3,4], 2))

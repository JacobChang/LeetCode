function threeSumClosest(nums: number[], target: number): number {
  if (nums.length < 3) {
    return 0;
  }

  nums = nums.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  let closest: number = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }

    const curr = nums[i];
    let lowerIndex = i + 1;
    let higherIndex = nums.length - 1;
    while (lowerIndex < higherIndex) {
      const sum = nums[lowerIndex] + nums[higherIndex] + curr;
      const currDiff = Math.abs(sum - target);
      const prevDiff = Math.abs(closest - target);
      if (currDiff < prevDiff) {
        closest = sum;
      }

      if (sum === target) {
        return target;
      } else if (sum > target) {
        higherIndex--;
      } else {
        lowerIndex++;
      }
    }
  }

  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1) === 2)

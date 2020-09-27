function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
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

  let results: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    // skip duplicate numers
    if (nums[i] === nums[i - 1]) {
      continue
    }

    const curr = nums[i];
    let lowerIndex = i + 1;
    let higherIndex = nums.length - 1;
    while (lowerIndex < higherIndex) {
      if (nums[lowerIndex] + nums[higherIndex] + curr === 0) {
        results.push([curr, nums[lowerIndex], nums[higherIndex]]);

        // move index to the middle
        while (lowerIndex < higherIndex && nums[lowerIndex] === nums[lowerIndex + 1]) {
          lowerIndex++;
        }

        while (lowerIndex < higherIndex && nums[higherIndex] === nums[higherIndex - 1]) {
          higherIndex--;
        }
        lowerIndex++;
        higherIndex--;
      } else if (nums[lowerIndex] + nums[higherIndex] + curr > 0) {
        higherIndex--;
      } else {
        lowerIndex++;
      }
    }
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-1, 0, 1, 2, -1, -2]))
console.log(threeSum([0, 0, 0, 0]))
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))

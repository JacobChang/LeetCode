function fourSum(nums: number[], target: number): number[][] {
  const results: number[][] = [];
  const len = nums.length;
  nums = nums.sort(function (a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < len - 3; ++i) {
    if (nums[i] == nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < len - 2; ++j) {
      if (nums[j] == nums[j - 1] && j > i + 1) {
        continue;
      }

      let lowerIndex = j + 1;
      let higherIndex = len - 1;
      while (lowerIndex < higherIndex) {
        const sum = nums[i] + nums[j] + nums[lowerIndex] + nums[higherIndex];
        if (sum === target) {
          results.push([nums[i], nums[j], nums[lowerIndex], nums[higherIndex]]);
          while (lowerIndex < higherIndex && nums[lowerIndex] == nums[lowerIndex + 1]) {
            lowerIndex++;
          }
          while (lowerIndex < higherIndex && nums[higherIndex] == nums[higherIndex - 1]) {
            higherIndex--;
          }
          lowerIndex++;
          higherIndex--;
        } else if (sum < target) {
          lowerIndex++;
        } else {
          higherIndex--;
        }
      }
    }
  }

  return results;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

console.log(fourSum([0, 0, 0, 0], 0))
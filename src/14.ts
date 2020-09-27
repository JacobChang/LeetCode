function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }

  let i = 0;
  let count = strs.length;
  let str = '';

  while (true) {
    let char = strs[0][i];
    if (char === undefined) {
      break;
    }

    let isCommon = true;
    for (let j = 1; j < count; j++) {
      if (!strs[j][i] || strs[j][i] !== char) {
        isCommon = false;
        break;
      }
    }

    if (isCommon) {
      str += char;
    } else {
      break;
    }
    i++;
  }

  return str;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
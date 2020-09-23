function convert(src: string, numRows: number): string {
  if (numRows == 1) {
    return src;
  }

  let len = src.length;
  let cycleLen = 2 * numRows - 2;
  let result = "";

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < len; j += cycleLen) {
      result += src[j + i];
      if (i != 0 && i != numRows - 1 && j + cycleLen - i < len) {
        result += src.charAt(j + cycleLen - i);
      }
    }
  }

  return result;
};
console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))

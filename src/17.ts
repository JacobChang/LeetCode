function letterCombinations(digits: string): string[] {
  if (digits === '') {
    return [];
  }

  const DigitChars: { [key: string]: string } = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let digitChars = [];
  for (const digit of digits) {
    digitChars.push(DigitChars[digit] || '');
  }

  return digitChars.reduce(function (strs, chars) {
    let results = [];
    for (const char of chars) {
      for (const str of strs) {
        results.push(str + char);
      }
    }
    return results;
  }, ['']);
};

console.log(letterCombinations('23'))
console.log(letterCombinations(''))

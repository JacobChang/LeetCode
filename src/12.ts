function intToRoman(num: number): string {
  const Ones = ['I', 'X', 'C', 'M'];
  const Fives = ['V', 'L', 'D']
  let result = [];
  let maxDigits = 3;

  for (let i = maxDigits; i >= 0; i--) {
    let base = Math.pow(10, i);
    let div = Math.floor(num / base);
    if (div > 0 && div < 4) {
      result.push(Ones[i].repeat(div))
    } else if (div === 4) {
      result.push(Ones[i] + Fives[i]);
    } else if (div === 5) {
      result.push(Fives[i]);
    } else if (div > 5 && div < 9) {
      result.push(Fives[i] + Ones[i].repeat(div - 5))
    } else if (div === 9) {
      result.push(Ones[i] + Ones[i + 1]);
    }

    num -= div * base;
  }

  console.log(result);
  return result.join('');
};

console.log(intToRoman(3) === 'III');
console.log(intToRoman(4) === 'IV')
console.log(intToRoman(9) === 'IX')
console.log(intToRoman(58) === 'LVIII')
console.log(intToRoman(1994) === 'MCMXCIV')

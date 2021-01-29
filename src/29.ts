function divide(dividend: number, divisor: number): number {
  if (dividend === 0) {
      return 0;
  }

  if (divisor === 1) {
      return dividend;
  }

  let sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  let i = 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while(dividend >= divisor) {
      i++;
      dividend = dividend - divisor;
  }

  let result = i * sign;
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
      return Math.pow(2, 31) - 1;
  }

  return result;
};

console.log(divide(0, 1));
console.log(divide(1, 1));
console.log(divide(10, 3));
console.log(divide(-7, 3));

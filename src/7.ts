// 
function reverse(x: number): number {
  let sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  let res = 0;
  let MAX_VALUE = Math.pow(2, 31) - 1;
  let MIN_VALUE = -Math.pow(2, 31)
  while (x != 0) {
    let rem = x % 10;
    x = Math.floor(x / 10);

    if (res > MAX_VALUE / 10 || (res == MAX_VALUE / 10 && rem > 7)) {
      return 0;
    }

    if (res < MIN_VALUE / 10 || (res == MIN_VALUE / 10 && rem < -8)) {
      return 0;
    }

    res = res * 10 + rem;
  }

  return res * sign;
};

console.log(reverse(4321))
console.log(reverse(1234))
console.log(reverse(-1234))
console.log(reverse(1534236469))

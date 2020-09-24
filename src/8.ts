function myAtoi(str: string): number {
  if (!str || str.length === 0) {
    return 0;
  }

  str = str.trim();
  if (str.length === 0) {
    return 0;
  }

  const MAX_VALUE = Math.pow(2, 31) - 1;
  const MIN_VALUE = -Math.pow(2, 31);
  let res = 0;
  let sign = 1;
  if (str[0] === '-') {
    sign = -1;
    str = str.slice(1);
  } else if (str[0] === '+') {
    sign = 1;
    str = str.slice(1);
  }

  if (str[0] < '0' || str[0] > '9') {
    return 0;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      break;
    }

    const val = Number(str[i]) - 0;
    res = res * 10 + val;

    if (sign * res > MAX_VALUE) {
      return MAX_VALUE;
    }

    if (sign * res < MIN_VALUE) {
      return MIN_VALUE;
    }
  }

  return res * sign;
};

console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('+1'));
console.log(myAtoi('  -0012a42'));
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))

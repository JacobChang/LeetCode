function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let sum = 0;
  let remain = x;
  while (remain > 0) {
    if (remain < 10) {
      sum = sum * 10;
      sum += remain;
      break;
    }

    let mod = remain % 10;
    remain = (remain - mod) / 10;
    sum = sum * 10;
    sum = sum + mod;
  }

  return sum === x;
};
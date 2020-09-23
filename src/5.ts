function longestPalindrome(str: string): string {
  if (!str || str.length === 0) {
    return '';
  }

  let palindrome = {
    len: 0,
    left: 0,
    right: 0,
  };
  for (let i = 0; i < str.length; i++) {
    let charRange = checkPalindrome(str, i, i);
    let gapRange = checkPalindrome(str, i, i + 1);
    let maxRange = charRange.len > gapRange.len ? charRange : gapRange;
    console.log(charRange, gapRange, maxRange);
    if (maxRange.len > palindrome.len) {
      palindrome = maxRange;
    }
  }

  return str.substring(palindrome.left, palindrome.right + 1);
};

function checkPalindrome(str: string, left: number, right: number): { len: number, right: number, left: number } {
  if (str[left] !== str[right]) {
    return {
      len: 0,
      left,
      right,
    }
  }

  let len = str.length;
  let leftCursor = left;
  let rightCursor = right;
  while (left >= 0 && right <= len - 1) {
    if (str[left] !== str[right] || left < 0 || right > len) {
      break;
    }

    leftCursor = left;
    rightCursor = right;
    left -= 1;
    right += 1;
  }

  return {
    len: right - left,
    right: rightCursor,
    left: leftCursor
  }
}

console.log(longestPalindrome("ababa"))
console.log(longestPalindrome("babad"))
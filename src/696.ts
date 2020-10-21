function countBinarySubstrings(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  let count = 0;
  let lastChar = s[0] as '0' | '1';
  const statis = {
    0: lastChar === '0' ? 1 : 0,
    1: lastChar === '1' ? 1 : 0
  }

  for (let i = 1; i < s.length; i++) {
    let currChar = s[i] as '0' | '1';
    statis[currChar] = statis[currChar] + 1;

    if (statis[0] === 0 || statis[1] === 0) {
      continue;
    }

    if (currChar !== lastChar) {
      statis[currChar] = 1;
    }

    const diffChar = currChar === '0' ? '1' : '0'
    if (statis[currChar] <= statis[diffChar]) {
      count++;
    } else {
      statis[diffChar] = 0;
    }

    lastChar = currChar;
  }

  return count;
}
console.log(countBinarySubstrings('00110011'))
console.log(countBinarySubstrings('10101'))
console.log(countBinarySubstrings('00100'))
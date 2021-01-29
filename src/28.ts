function strStr(haystack: string, needle: string): number {
  if (needle === "") {
    return 0;
  }

  if (haystack === "") {
    return -1;
  }

  let haystackLen = haystack.length;
  let needleLen = needle.length;
  if (haystackLen < needleLen) {
    return -1;
  }

  for (let i = 0; i < haystackLen; i++) {
    let j;
    for (j = 0; j < needleLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needleLen) {
      return i;
    }
  }

  return -1;
}

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaaa", "baa"));
console.log(strStr("", ""));

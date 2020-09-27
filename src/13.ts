function romanToInt(s: string): number {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let num = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    let currChar = s[i];
    let nextChar = s[i + 1];
    switch (currChar) {
      case 'I': {
        if (nextChar === 'V') {
          num += 4;
          i++
        } else if (nextChar === 'X') {
          num += 9;
          i++;
        } else {
          num += values.I;
        }
      }
        break;
      case 'V':
        num += values.V;
        break;
      case 'X':
        {
          if (nextChar === 'L') {
            num += 40;
            i++
          } else if (nextChar === 'C') {
            num += 90;
            i++;
          } else {
            num += values.X;
          }
        }
        break;
      case 'L':
        num += values.L;
        break;
      case 'C':
        {
          if (nextChar === 'D') {
            num += 400;
            i++
          } else if (nextChar === 'M') {
            num += 900;
            i++;
          } else {
            num += values.C;
          }
        }
        break;
      case 'D':
        num += values.D;
        break;
      case 'M':
        num += values.M;
        break;
    }
  }

  return num;
};

console.log(romanToInt('III') === 3);
console.log(romanToInt('IV') === 4)
console.log(romanToInt('IX') === 9)
console.log(romanToInt('LVIII') === 58)
console.log(romanToInt('MCMXCIV') === 1994)

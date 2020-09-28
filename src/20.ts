function isValid(s: string): boolean {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push('(');
        break;
      case '[':
        stack.push('[');
        break;
      case '{':
        stack.push('{');
        break;
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else {
          return false;
        }
        break;
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        } else {
          return false;
        }
        break;
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop();
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }

  return stack.length === 0;
};
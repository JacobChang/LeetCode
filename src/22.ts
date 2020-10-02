function generateParenthesis(n: number): string[] {
  const results: string[] = [];
  generate(results, "", 0, 0, n);

  return results;
};

function generate(results: string[], cur: string, open: number, close: number, max: number) {
  if (cur.length == max * 2) {
    results.push(cur);
    return;
  }

  if (open < max)
    generate(results, cur + "(", open + 1, close, max);
  if (close < open)
    generate(results, cur + ")", open, close + 1, max);
}

console.log(generateParenthesis(3));

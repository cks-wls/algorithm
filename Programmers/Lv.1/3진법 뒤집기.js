// solution 1
function solution(n) {
  let max = 0;
  let count = 0;
  let result = 0;
  let reverse = "";
  while (3 ** max <= n) {
    max++;
  }
  if (n !== 0) {
    for (let i = max - 1; i >= 0; i--) {
      if (3 ** i * 2 <= n) {
        count = 2;
        n -= 3 ** i * 2;
        reverse += count;
      } else if (3 ** i <= n) {
        count = 1;
        n -= 3 ** i;
        reverse += count;
      } else {
        count = 0;
        reverse += count;
      }
    }
  } else {
    return 0;
  }

  for (let i = 0; i < reverse.length; i++) {
    result += 3 ** i * Number(reverse[i]);
  }
  return result;
}

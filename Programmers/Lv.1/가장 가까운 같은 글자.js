// solution 1
function solution(s) {
  const result = [];
  let value = -1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (i !== j) {
        if (s[i] === s[j]) {
          value = i - j;
          break;
        }
      }
    }
    result.push(value);
    value = -1;
  }
  return result;
}

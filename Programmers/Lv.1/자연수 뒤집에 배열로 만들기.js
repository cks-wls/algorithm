// solution 1
function solution(n) {
  const result = [];
  let str = "";
  n += str;
  for (let value of n) {
    result.unshift(Number(value));
  }
  return result;
}
// solution 2
function solution(n) {
  const arr = String(n).split("");
  const result = [];
  for (let value of arr) {
    result.push(Number(value));
  }
  return result.reverse();
}

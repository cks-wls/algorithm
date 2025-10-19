// solution 1
function solution(n) {
  let x = 2;
  while (n % x !== 1) {
    x++;
  }
  return x;
}

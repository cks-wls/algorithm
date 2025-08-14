function solution(a, b, n) {
  let empty = n;
  let real = 0;
  let count = 0;
  while (empty >= a) {
    empty -= a;
    real += b;
    count += b;
    while (real > 0) {
      real -= 1;
      empty += 1;
    }
  }
  return count;
}

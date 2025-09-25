// sol1
function solution(numbers) {
  let result = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      result += i;
    }
  }
  return result;
}
// sol2
function solution(numbers) {
  const totalNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = 0;
  for (let value of totalNumber) {
    if (!numbers.includes(value)) {
      answer += value;
    }
  }
  return answer;
}

// solution 1
function solution(k, score) {
  const arr = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      arr.push(score[i]);
      arr.sort((a, b) => a - b);
      answer.push(arr[0]);
    } else {
      if (score[i] >= arr[0]) {
        arr.splice(0, 1, score[i]);
        arr.sort((a, b) => a - b);
      }
      answer.push(arr[0]);
    }
  }
  return answer;
}

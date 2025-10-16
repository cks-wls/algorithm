// solution 1
function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  const box = [];
  for (let i = 0; i < score.length; i += m) {
    let middle = [];
    for (let j = 0; j < m; j++) {
      middle.push(score[i + j]);
    }
    box.push(middle);
  }
  for (let value of box) {
    if (!value.includes(undefined)) {
      let min = Math.min(...value);
      result += min * m;
    }
  }
  return result;
}

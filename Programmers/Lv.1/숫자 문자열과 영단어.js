// solution 1
function solution(s) {
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const numStr = Object.keys(number);
  let result = "";
  let midResult = "";
  for (let value of s) {
    if (!isNaN(Number(value))) {
      result += value;
    } else {
      midResult += value;
      if (numStr.includes(midResult)) {
        result += number[midResult];
        midResult = "";
      }
    }
  }
  return Number(result);
}

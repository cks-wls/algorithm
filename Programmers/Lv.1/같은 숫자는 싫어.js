// solution 1
function solution(arr) {
  const result = [];
  let hasValue = false;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      if (arr[i] === arr[i - 1]) {
        hasValue = true;
      } else {
        hasValue = false;
      }
    }
    if (!hasValue) {
      result.push(arr[i]);
    }
  }
  return result;
}

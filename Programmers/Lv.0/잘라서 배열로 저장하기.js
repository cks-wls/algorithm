// solution 1
function solution(my_str, n) {
  const result = [];
  let str = "";
  for (let i = 0; i < my_str.length; i++) {
    if (i !== my_str.length - 1) {
      if (i % n !== n - 1) {
        str += my_str[i];
      } else {
        str += my_str[i];
        result.push(str);
        str = "";
      }
    } else {
      str += my_str[i];
      result.push(str);
    }
  }
  return result;
}
// solution 2
function solution(my_str, n) {
  let ind = n - 1;
  const result = [];
  let middle = "";
  for (let i = 0; i < my_str.length; i++) {
    if (i % n === ind || i === my_str.length - 1) {
      middle += my_str[i];
      result.push(middle);
      middle = "";
    } else {
      middle += my_str[i];
    }
  }
  return result;
}

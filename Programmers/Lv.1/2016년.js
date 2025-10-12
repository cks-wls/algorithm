// solution 1
function solution(a, b) {
  const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDate = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDate += date[i];
  }
  totalDate += b;
  switch (totalDate % 7) {
    case 0:
      return "THU";
      break;
    case 1:
      return "FRI";
      break;
    case 2:
      return "SAT";
      break;
    case 3:
      return "SUN";
      break;
    case 4:
      return "MON";
      break;
    case 5:
      return "TUE";
      break;
    case 6:
      return "WED";
      break;
  }
}

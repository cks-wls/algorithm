function solution(s) {
    const numArr = s.split(" ");
    let max = Number(numArr[0]);
    let min = Number(numArr[0]);
    for (let value of numArr){
        if (Number(value) >= max){
            max = Number(value);
        }
        if (Number(value) <= min){
            min = Number(value);
        }
    }
    return Number(min) + ' ' + Number(max);
}
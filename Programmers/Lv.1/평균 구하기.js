function solution(arr) {
    let sum = 0;
    for (let value of arr){
        sum += value;
    }
    return (sum / arr.length);
}
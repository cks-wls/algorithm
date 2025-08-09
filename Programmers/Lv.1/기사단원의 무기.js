function solution(number, limit, power) {
    const arr = [];
    let answer = 0;
    for (let i = 1; i <= number; i++){
        arr.push(measure(i));
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > limit){
            arr[i] = power;
        }
    }
    for (let value of arr){
        answer += value;
    }
    return answer;
}
function measure(val){
    let count = 0;
    let sqrt = Math.sqrt(val)
     for (let i = 1; i <= sqrt; i++) {
        if (val % i === 0) {
            if (i === sqrt) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    return count ;
}
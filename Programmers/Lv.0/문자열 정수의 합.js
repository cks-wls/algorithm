function solution(num_str) {
    let number = 0;
    for (let value of num_str){
        number += Number(value);
    }
    return number;
}
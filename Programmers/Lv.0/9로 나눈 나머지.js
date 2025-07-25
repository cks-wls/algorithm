function solution(number) {
    let result = 0;
    for (let value of number){
        result += Number(value);
    }
    return (result % 9);
}
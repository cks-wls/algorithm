function solution(n) {
    const arr = [];
    let str = n +'';
    let result = '';
    for (let value of str){
        arr.push(value);
    }
    arr.sort((a,b) => b-a);
    for (let value of arr){
        result += value;
    }
    return Number(result);
}
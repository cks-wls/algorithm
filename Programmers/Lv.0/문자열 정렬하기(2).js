function solution(my_string) {
    let string = [];
    let result = '';
    for (let value of my_string){
        string.push(value.toLowerCase());
    }
    let resultArray = string.sort();
    for (let value of resultArray){
        result += value;
    }
    return result;
}
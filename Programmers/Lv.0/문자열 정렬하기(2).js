// solution 1
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
// solution 2
function solution(my_string) {
    const result = my_string.split('');
    for (let i = 0; i < result.length; i ++){
        result[i] = result[i].toLowerCase();
    }
    return result.sort().join('');
}
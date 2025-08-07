// solution 1
function solution(my_string) {
    let result = ""
    for (let i = my_string.length - 1 ; i >= 0 ; i --){
        result += my_string[i];
    }
    return result;
}
//solution 2
function solution(my_string) {
    return my_string.split('').reverse().join('');
}
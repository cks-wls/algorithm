// solution 1
function solution(my_string) {
    const resultArr = [];
    for (let i = 0; i < my_string.length; i++){
        let result = '';
        for (let j = i; j < my_string.length; j++){
            result += my_string[j];
        }
        resultArr.push(result);
    }
    return resultArr.sort();
}
// solution 2
function solution(my_string) {
    const result = [];
    let str = ''
    for (let i = my_string.length -1; i >= 0 ; i--){
        str = my_string[i] + str;
        result.push(str);
    }
    return result.sort();
}
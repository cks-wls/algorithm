function solution(my_string, s, e) {
    let switchStr = '';
    let result = '';
    for (let i = e; i >= s; i--){
        switchStr += my_string[i];
    }
    for (let i = 0; i < s; i++){
        result += my_string[i];
    }
    result += switchStr;
    for (let i = e+1; i < my_string.length; i++){
        result += my_string[i];
    }
    return result;
}
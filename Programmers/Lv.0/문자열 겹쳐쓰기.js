function solution(my_string, overwrite_string, s) {
    let result = '';
    for (let i = 0; i < s; i++){
        result += my_string[i];
    }
    result += overwrite_string;
    for (let i = s + overwrite_string.length; i < my_string.length; i++){
     result += my_string[i];   
    }
    return result;
}
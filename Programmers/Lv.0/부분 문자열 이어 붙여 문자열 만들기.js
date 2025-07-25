function solution(my_strings, parts) {
    let result = '';
    for(let i = 0 ; i < my_strings.length ; i++){
        let string = my_strings[i];
        let part = parts[i];
        for(let j = part[0]; j <= part[1]; j++){
            result += string[j];
        }
    }
    return result;
}
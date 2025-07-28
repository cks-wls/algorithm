function solution(str_list, ex) {
    let result = '';
    for (let value of str_list){
        if (!value.includes(ex)){
            result += value;
        }
    }
    return result;
}
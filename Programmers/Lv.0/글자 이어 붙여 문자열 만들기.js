function solution(my_string, index_list) {
    let result = '';
    for (let value of index_list){
        result += my_string[value];
    }
    return result;
}
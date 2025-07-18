function solution(num_list) {
    const result = [];
    for (let value of num_list){
        result.unshift(value);
    }
    return result;
}
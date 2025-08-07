// solution 1
function solution(num_list) {
    const result = [];
    for (let value of num_list){
        result.unshift(value);
    }
    return result;
}
//solution 2
function solution(num_list) {
    return num_list.reverse();
}
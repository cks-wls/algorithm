function solution(num_list, n) {
    const result = [];
    for (let i = n-1; i < num_list.length; i++){
        result.push(num_list[i]);
    }
    return result;
}
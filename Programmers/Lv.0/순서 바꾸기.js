function solution(num_list, n) {
    const result1 = [];
    const result2 = [];
    for (let i = n; i < num_list.length; i++){
        result1.push(num_list[i]);
    }
    for(let j = 0; j < n; j++){
        result2.push(num_list[j]);
    }
    return [...result1, ...result2];
}
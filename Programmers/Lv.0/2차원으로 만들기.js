function solution(num_list, n) {
    const result = [];
    let arr = [];
    for (let i = 0; i <= num_list.length - n; i += n){
        for (let j = i; j < i+ n; j++){
            arr.push(num_list[j]);
        }
        result.push(arr);
        arr = [];
    }
    return result;
}
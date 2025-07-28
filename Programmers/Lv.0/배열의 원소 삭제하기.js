function solution(arr, delete_list) {
    const result = [];
    for (let value of arr){
        if (!delete_list.includes(value)){
            result.push(value);
        }
    }
    return result;
}
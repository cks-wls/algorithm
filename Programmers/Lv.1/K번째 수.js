function solution(array, commands) {
    const result = [];
    let arr =[];
    for (let value of commands){
        for (let i = value[0]-1; i < value[1]; i++){
            arr.push(array[i]);
        }
        arr.sort((a,b) => a-b);
        result.push(arr[value[2]-1]);
        arr = [];
    }
    return result;
}
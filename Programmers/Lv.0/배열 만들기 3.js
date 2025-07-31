function solution(arr, intervals) {
    let fir = intervals[0];
    let sec = intervals[1];
    const result = [];
    for (let i = fir[0] ; i <= fir[1]; i++){
        result.push(arr[i]);
    }
    for (let i = sec[0]; i <= sec[1]; i++){
        result.push(arr[i]);
    }
    return result;
}
function solution(n) {
    const arr = [];
    arr.push(0);
    arr.push(1);
    while(arr.length < n + 1){
        arr.push(arr[arr.length-1] %1234567 + arr[arr.length-2] % 1234567);
    }
    let result = arr[arr.length-1] % 1234567;
    return result;
}

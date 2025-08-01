function solution(arr, queries) {
    let firIndex = 0;
    let secIndex = 0;
    let altNum = 0;
    for (let i = 0; i < queries.length; i++){
        firIndex = queries[i][0];
        secIndex = queries[i][1];
        altNum = arr[firIndex];
        arr[firIndex] = arr[secIndex];
        arr[secIndex] = altNum;
        }
    return arr;
}
    
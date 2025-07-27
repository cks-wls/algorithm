function solution(arr, k) {
    const result = arr.map((value) => {
        if (k % 2 === 0){
            return value + k;
        }else{
            return value * k;
        }
    })
    return result;
}
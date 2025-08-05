function solution(arr, queries) {
    const result = [];
    let middle = [];
    for (let value of queries){
        let count  = 0;
        let s = value[0];
        let e = value[1];
        let k = value[2];
        for (let i = s ; i <= e; i++){
            if(arr[i] > k){
                middle.push(arr[i])
            }else{
                count ++;
            }
        }
        middle.sort((a,b) => a-b)
        if (count === (e - s + 1)){
            result.push(-1);
        }else{
            result.push(middle[0]);
        }
        middle = [];
    }
    return result;
}
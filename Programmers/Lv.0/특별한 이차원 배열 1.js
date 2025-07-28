function solution(n) {
    const result = [];
    let val = 0;
    for (let i = 0; i < n; i++){
         const midResult = [];
        for (let j = 0; j < n; j++){
            if (i===j){
                val = 1;
                midResult.push(val);
            }else{
                val = 0;
                midResult.push(val);
            }
        }
        result.push(midResult);
    }
    return result;
}
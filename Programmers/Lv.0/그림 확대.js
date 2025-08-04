function solution(picture, k) {
    const result = [];
    let str = '';
    for (let value of picture){
        for (let val1 of value){
            for (let i = 0; i < k; i++){
                str += val1;
            }
        }
        for(let j = 0; j < k; j++){
            result.push(str);
        }
        str = '';
    }
    return result;
}
function solution(intStrs, k, s, l) {
    let str = '';
    const result = [];
    const answer = [];
    for (let i = 0; i < intStrs.length; i++){
        for (let j = s; j < s + l; j++ ){
            str += intStrs[i][j] ;
        }
        result.push(str);
        str = '';
    }
    for (let value of result){
        if(Number(value) > k){
            answer.push(Number(value));
        }
    }
    return answer;
}
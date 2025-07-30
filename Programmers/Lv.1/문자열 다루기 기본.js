function solution(s) {
    let result = '';
    if (s.length === 4 || s.length === 6){
        for (let value of s){
            if (isNaN(Number(value))){
                return false;
            }else{
                result = true;
            }
        }
    }else{
        return false;
    }
    return result;
}
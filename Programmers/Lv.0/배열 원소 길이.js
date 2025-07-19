function solution(strlist) {
    let result = [];
    for (let value of strlist){
        let len = value.length;
        result.push(len);
    }
    return result;
}
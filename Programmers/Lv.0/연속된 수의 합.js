function solution(num, total) {
    const result = [];
    if (num % 2 ===1){
        let midNum = total / num;
        let count = (num - 1) / 2;
        for (let i = midNum - count; i <= midNum + count; i++){
            result.push(i);
        }
    }else{
        let midNum = total/num;
        let count = num / 2;
        for (let i = midNum - count  + 0.5; i <= midNum + count -0.5; i++){
            result.push(i);
        }
    }
    return result;
}
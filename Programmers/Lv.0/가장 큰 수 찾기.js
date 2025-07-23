function solution(array) {
    const result = [];
    let max = 0;
    let maxIndex = 0;
    for (let value of array){
        if (value >= max){
            max = value;
            maxIndex = array.indexOf(max);
        }
    }
    result.push(max);
    result.push(maxIndex);
    return result;
}
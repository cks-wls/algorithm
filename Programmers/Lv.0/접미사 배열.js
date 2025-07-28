function solution(my_string) {
    const resultArr = [];
    for (let i = 0; i < my_string.length; i++){
        let result = '';
        for (let j = i; j < my_string.length; j++){
            result += my_string[j];
        }
        resultArr.push(result);
    }
    return resultArr.sort();
}
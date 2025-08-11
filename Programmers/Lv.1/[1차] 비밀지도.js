function solution(n, arr1, arr2) {
    const map1 = [];
    const map2 = [];
    const result = [];
    for (let value of arr1){
        let str = '';
        for (let i = n-1; i >= 0; i--){
            if (value >= 2**i){
                str += 1;
                value -= 2**i;
            }else{
                str += 0;
            }
        }
        map1.push(str);
    }
    for (let value of arr2){
        let str = '';
        for (let i = n-1; i >= 0; i--){
            if (value >= 2**i){
                str += 1;
                value -= 2**i;
            }else{
                str += 0;
            }
        }
        map2.push(str);
    }
    for (let i = 0; i < map1.length; i++){
        let answer = '';
        for(let j = 0; j < n; j++){
            if (map1[i][j] === map2[i][j] && map1[i][j] ==='0'){
                answer += ' ';
            }else{
                answer += '#';
            }
        }
        result.push(answer);
    }
    return result;
}

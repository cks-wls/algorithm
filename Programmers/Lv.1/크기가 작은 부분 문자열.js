function solution(t, p) {
    const result = [];
    let count = 0;
    for (let i = 0; i <= t.length-p.length; i++){
        let str = '';
        let j = i;
        while (str.length !== p.length){
            str += t[j];
            j++;
        }
        result.push(str);
    }
    for (let value of result){
        if (Number(value) <= Number(p)){
            count ++;
        }
    }
    return count;
}
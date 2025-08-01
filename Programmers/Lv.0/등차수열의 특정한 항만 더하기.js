function solution(a, d, included) {
    const array = [];
    let result = 0;
    for (let i = 0; i < included.length; i++){
        array.push(a);
        a += d;
    }
    for (let i = 0; i < included.length; i++){
        if (included[i]){
            result += array[i];
        }
    }
    return result;
}
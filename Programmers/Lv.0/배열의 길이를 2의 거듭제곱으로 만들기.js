function solution(arr) {
    let n = 0;
    while (true){
        let len = 2 ** n;
        if (len >= arr.length){
            break;
        }
        n++;
    }
    for (let i = arr.length; i < 2 ** n; i++){
        arr.push(0);
    }
    return arr;
}
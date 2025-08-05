function solution(arr) {
    let before = arr.slice();
    let after = arr.slice();
    let correct = 0;
    let count = 0;
    while(true){
    for (let i = 0; i <= before.length; i++){
        correct = 0;
        if (before[i] >= 50 && before[i] % 2=== 0){
            after[i] = before[i] / 2;
        }
        if (before[i] < 50 && before[i] % 2 === 1){
            after[i] = before[i] * 2 + 1;
        }
    }
        count ++;
    for (let i = 0; i < before.length; i++){
        if (before[i] === after[i]){
            correct ++;
        }
        if (correct == before.length){
            return count -1;
            break;
        }
    }
        before = after.slice();
    }
}
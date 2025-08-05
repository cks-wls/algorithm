function solution(arr) {
    const result = [];
    const reverse = arr.slice();
    reverse.reverse();
    let reverseIndex = reverse.indexOf(2);
    let endIndex = arr.length - reverseIndex;
    let firIndex = arr.indexOf(2);
    if (firIndex === -1){return [-1]};
    const middle = arr.slice(firIndex + 1);
    let checkIndex = middle.indexOf(2);
    if (checkIndex === -1){return [2]};
    for (let i = firIndex; i < endIndex; i++){
        result.push(arr[i])
    }
    return result;
    
    
}
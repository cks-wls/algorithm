// solution 1
function solution(arr) {
    const arr1 = arr.slice();
    const result =[];
    if (arr.length === 1){
        arr.pop();
        arr.push(-1);
        return arr;
    }else{
        arr1.sort((a,b) => b-a);
        let del = arr1.pop();
        for (let value of arr){
            if (value !== del){
                result.push(value); 
            }
        }
    }
    return result;
}
// solution 2
function solution(arr) {
    let minNum = Math.min(...arr);
    let index = arr.indexOf(minNum);
    arr.splice(index,1);
    if (arr.length === 0){
        return [-1];
    }
    return arr;
}
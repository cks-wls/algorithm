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
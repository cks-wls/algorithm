function solution(s) {
    const arr = s.split(' ');
    const arr1 = [];
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 'Z'){
            arr1.push(arr[i]);
        }else{
            arr1.pop();
        }
    }
    for (let i = 0; i < arr1.length; i++){
        result += Number(arr1[i]);
    }
    return result;
}
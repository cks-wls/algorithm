function solution(arr) {
    let col = 0;
    let row = 0;
    let result = [];
    for (let value of arr){
        row ++;
    }
    for (let value of arr[0]){
        col ++;
    }
    if (row > col){
        for(let value of arr){
            for(let i = 0; i < row-col; i++){
                value.push(0);
            }
        }
    }else if (col > row){
        for (let i = 0; i < col - row; i++){
            for (let j = 0; j < col; j++){
                result.push(0);
            }
            arr.push(result);
            result = [];
        }
    }else{
        return arr;
    }
    return arr;
}
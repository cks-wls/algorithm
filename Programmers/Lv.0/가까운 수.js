function solution(array, n) {
    let num = array[0];
    for (let value of array){
        if (Math.abs(value - n) < Math.abs(num - n)){
            num = value;
        }else if (Math.abs(value - n) === Math.abs(num - n)){
            if (value < num){
                num = value;
            }
        }
    }
    return num;
}
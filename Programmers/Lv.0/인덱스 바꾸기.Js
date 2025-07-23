function solution(my_string, num1, num2) {
   let num1Value = my_string[num1];
    let num2Value = my_string[num2];
    let result = '';
    for (let i = 0; i < my_string.length; i++){
        if (i === num1){
            result += num2Value;
        }else if (i === num2){
            result += num1Value;
        }else{
            result += my_string[i];
        }
    }
    
    return result;
}
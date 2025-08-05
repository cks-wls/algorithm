function solution(my_string) {
    const result = [];
    let str= '';
    let count = 0;
    for (let i = 0; i < my_string.length; i++){
        let strToNum = Number(my_string[i]);
        if (!isNaN(strToNum)){
            str += strToNum;
        }
        if (
  (i === my_string.length - 1 && str.length !== 0) || 
  (isNaN(Number(my_string[i + 1])) && str.length !== 0)
) {
            result.push(str);
            str = '';
        }
    }
    for (let value of result){
        count += Number(value);
    }
    return count;
}
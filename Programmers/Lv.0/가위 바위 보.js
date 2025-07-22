// 가위 : 2 바위 : 0 보 : 5
function solution(rsp) {
    let result = ''
    for (let value of rsp){
        if (value === '2'){
            result += '0';
        }else if(value === '0'){
            result += '5';
        }else{
            result += '2';
        }
    }
    return result;
}
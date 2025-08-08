// solution 1
function solution(myString) {
    const result = [];
    const answer = [];
    let str = '';
    for (let i = 0 ; i < myString.length; i++){
        if (i !== myString.length-1){
            if (myString[i] !== 'x'){
                str += myString[i];
            }else if(myString[i] === 'x'){
                result.push(str);    
                str ='';
            }
        }else{
            if(myString[i] !== 'x'){
                str += myString[i];
                result.push(str);
            }else{
                result.push(str);
                result.push('');
            }
            
        }   
    }
    for (let value of result){
        answer.push(value.length);
    }
    return answer;
}
// solution 2
function solution(myString) {
    const arr = myString.split('x');
    const result = [];
    for (let value of arr){
        result.push(value.length);
    }
    return result;
}
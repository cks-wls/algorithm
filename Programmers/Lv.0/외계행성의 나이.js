// solution 1
function solution(age) {
    let result = '';
    let planetAge = age + '';
    for (let value of planetAge){
        switch(value){
            case '0':
                result += 'a';
                break;
            case '1':
                result += 'b';
                break;
            case '2':
                result += 'c';
                break;
            case '3':
                result += 'd';
                break;
            case '4':
                result += 'e';
                break;
            case '5':
                result += 'f';
                break;
            case '6':
                result += 'g';
                break;
            case '7':
                result += 'h';
                break;
            case '8':
                result += 'i';
                break;
            case '9':
                result += 'j';
                break;
        }
    }
    return result;
}
// solution 2
function solution(age) {
    const object = {
        '0' : 'a', 
        '1' : 'b', 
        '2' : 'c', 
        '3' : 'd', 
        '4' : 'e', 
        '5' : 'f', 
        '6' : 'g', 
        '7' : 'h', 
        '8' : 'i', 
        '9' : 'j', 
    };
    let result = '';
    age = age + '';
    for (let value of age){
        result += object[value];
    }
    return result;
}
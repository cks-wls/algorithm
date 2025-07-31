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
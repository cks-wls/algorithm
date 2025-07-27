function solution(myString, pat) {
    let newMyString = '';
    for (let value of myString){
        if (value === 'A'){
            newMyString += 'B';
        }else{
            newMyString += 'A';
        }
    }
    if (newMyString.includes(pat)){
        return 1;
    }else{
        return 0;
    }
}
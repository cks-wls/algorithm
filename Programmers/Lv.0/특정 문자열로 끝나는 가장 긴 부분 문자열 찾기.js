function solution(myString, pat) {
    const arr = pat.split('');
    const lastStr = arr[arr.length-1];
    let index = 0;
    for (let i = 0; i < myString.length; i++){
        if (myString[i] === lastStr){
            index = i;
        }
    }
    return myString.slice(0,index+1);
}
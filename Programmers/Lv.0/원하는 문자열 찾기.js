function solution(myString, pat) {
    let lowMyString = myString.toLowerCase();
    let lowPat = pat.toLowerCase();
    if (lowMyString.includes(lowPat)){
        return 1;
    }else{
        return 0;
    }
}
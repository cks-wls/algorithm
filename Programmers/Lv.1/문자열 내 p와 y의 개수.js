function solution(s){
    let pCount = 0;
    let yCount = 0;
    for (let value of s){
        if (value === 'p' || value === 'P'){
            pCount += 1;
        }else if (value === 'y' || value === 'Y'){
            yCount += 1;
        }
    }
    if (pCount === 0 && yCount === 0){
        return  true;
    }else{
     if (pCount === yCount){
        return  true;
    }else{
        return  false;
    }   
    }
}
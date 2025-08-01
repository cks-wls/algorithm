function solution(before, after) {
    let result = 0;
    let num = 0;
    const newAfter = after.split('');
    for (let i = 0; i < before.length; i++){
        if (newAfter.includes(before[i])){
            result ++;
            num = newAfter.indexOf(before[i]);
            newAfter.splice(num,1,'/');
        }
    }
    if (result === after.length){
        return 1;
    }else{
        return 0;
    }
}
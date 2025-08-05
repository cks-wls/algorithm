function solution(bin1, bin2) {
    let fir = 0;
    let sec = 0;
    let result = '';
    let count = 0;
    let reverseBin1 = bin1.split('').reverse().join('');
    let reverseBin2 = bin2.split('').reverse().join('');
    for (let i = 0; i < reverseBin1.length; i++){
        fir += (2 ** i) * Number(reverseBin1[i]);
    }
    for (let i = 0; i < reverseBin2.length; i++){
        sec += (2 ** i) * Number(reverseBin2[i]);
    }
    let num = fir + sec;
    while (true){
        if (num === 0){
            count = 1;
            break;
        }else{
            if (num >= 2 ** count){
                count ++;
            }else{
                break;
            }
        }
    }
    for (let i = count - 1; i >= 0; i--){
        if (num - 2 ** i >= 0){
            result += 1;
            num -= 2 ** i;
        }else{
            result += 0;
        }
    }
    return result;
}
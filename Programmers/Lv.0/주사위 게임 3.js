function solution(a, b, c, d) {
    const arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.push(d);
    arr.sort((a,b) => a-b);
    let count = 0;
    for (let i = 0; i < 4; i++){
        for (let j = i + 1; j < 4; j++){
            if (arr[i] === arr[j]){
                count ++;
            }
        }
    }
    switch(count){
        case 6:
            return 1111 * a;
            break;
        case 3:
            if (arr[0] === arr[1]){
                return (10*arr[0] + arr[3])**2;
            }else{
                return (10*arr[3] + arr[0])**2;
            }
        case 2:
            return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
        case 1:
            if (arr[0] === arr[1]){
                return arr[2] * arr[3];
            }else if (arr[1] === arr[2]){
                return arr[0] * arr[3];
            }else if (arr[2] === arr[3]){
                return arr[0] * arr[1];
            }
        case 0:
            return arr[0];
    }
}
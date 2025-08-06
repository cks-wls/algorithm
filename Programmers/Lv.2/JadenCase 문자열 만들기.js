function solution(s) {
    let str = s.split(' ');
    let result = [];
    for (let value of str){
        let a = value.split('');
        for (let i = 0; i < a.length; i++){
            if (i === 0){
                a[i] = a[i].toUpperCase();
            }else{
                a[i] = a[i].toLowerCase();
            }
        }
        let b = a.join('');
        result.push(b);
    }
    return result.join(' ');
}
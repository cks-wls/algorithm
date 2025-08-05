function solution(A, B) {
    let cont = [];
    let copy = A.slice().split('');
    let arr = copy.slice()
    let str = '';
    for (let i = 0; i < copy.length; i++){
        cont.push(arr.join(''));
        let front = arr.pop();
        arr.unshift(front);
    }
    if (cont.includes(B)){
        return cont.indexOf(B);
    }else{
        return -1;
    }
}
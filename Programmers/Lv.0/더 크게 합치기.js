function solution(a, b) {
    let before = '';
    let after = '';
    before = (a + '') + (b + '');
    after = (b + '') + (a + '');
    if (Number(before) >= Number(after)){
        return Number(before);
    }else{
        return Number(after);
    }
}
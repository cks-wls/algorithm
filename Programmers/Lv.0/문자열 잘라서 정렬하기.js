function solution(myString) {
    const result = myString.split('x').filter((val) => val !== '');
    return result.sort();
}
function solution(n)
{
    let result = 0;
    let numToStr = String(n);
    for (let value of numToStr){
        result += Number(value);
    }
    return result;
}
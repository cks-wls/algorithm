function solution(numbers) {
    let str = '';
    let result = '';
    const number = {
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
        'zero' : 0,
    }
    const numberKey = Object.keys(number);
    for (let i = 0; i < numbers.length; i++){
        if (i !== numbers.length -1){
            if (!numberKey.includes(str)){
                str += numbers[i];
            }else{
                result += number[str];
                str = '';
                str += numbers[i];
            }
        }else{
            str += numbers[i];
            result += number[str];
        }
    }
    return Number(result);
}
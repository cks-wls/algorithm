function solution(numbers, direction) {
    if (direction === 'right'){
        let popNum = numbers.pop();
        numbers.unshift(popNum);
        return numbers;
    }
    if (direction === 'left'){
        let shiftNum = numbers.shift();
        numbers.push(shiftNum);
        return numbers;
    }
}
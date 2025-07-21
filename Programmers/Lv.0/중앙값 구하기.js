function solution(array) {
    array.sort((a,b) => a-b);
    let centerIndex = Math.floor(array.length/2);
    return array[centerIndex];
}
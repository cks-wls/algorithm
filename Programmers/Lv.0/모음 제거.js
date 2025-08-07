// solution 1
function solution(my_string) {
    let result = "";
    for (let i = 0; i < my_string.length ; i++){
        let value = my_string[i];
        if (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u'){
            result += "";
        }else{
            result += value;
        }
    }
    return result;
}
// solution 2
function solution(my_string) {
    const vowel = ['a', 'e', 'i' ,'o', 'u'];
    let result = '';
    for (let value of my_string){
        if (!vowel.includes(value)){
            result += value;
        }       
    }
    return result;
}
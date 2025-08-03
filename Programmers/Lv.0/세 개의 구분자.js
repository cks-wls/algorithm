function solution(myStr) {
    const result = myStr.split(/[abc]/).filter((element) => element != '');
    if (result.length === 0){
        result.push("EMPTY");
    }
    return result;
}
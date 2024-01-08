function solution(n) {
    let answer = [];
    answer = (n+"").split("").reverse().map(x => Number(x));
    
    return answer;
}
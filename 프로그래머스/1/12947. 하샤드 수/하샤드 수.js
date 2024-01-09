function solution(x) {
    let answer = true;
    let result = (x+"").split("").map(e => e/1).reduce((acc, cur) => acc + cur);
    if(x % result !== 0)
        answer = false;
    
    return answer;
}
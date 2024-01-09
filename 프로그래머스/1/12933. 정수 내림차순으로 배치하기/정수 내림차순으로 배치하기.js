function solution(n) {
    let answer = "";
    let array = (n+"").split("").sort((a, b) => b-a).forEach(e => {
        answer += e;
    });
    answer /= 1
    
    return answer;
}
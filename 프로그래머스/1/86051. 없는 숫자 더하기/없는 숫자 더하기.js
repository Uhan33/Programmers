function solution(numbers) {
    let allNumberLen = 10;
    let answer = 0;
    for(let i = 0; i < allNumberLen; i++) {
        answer += i;
    }
    numbers.forEach((e) => {answer -= e});
    
    return answer;
}
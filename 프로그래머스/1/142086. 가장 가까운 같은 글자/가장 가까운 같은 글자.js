function solution(s) {
    let answer = [-1];
    let count;
    for(let i = 1; i < s.length; i++) {
        count = -1;
        for(let j = i-1; j >= 0; j--) {
            if(s[i] === s[j]) {
                count = i-j;
                break;
            }
        }
        answer.push(count);
    }
    
    return answer;
}
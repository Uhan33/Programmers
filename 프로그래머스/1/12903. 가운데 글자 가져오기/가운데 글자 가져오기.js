function solution(s) {
    let answer = '';
    if(s.length % 2 === 0) {
        for(let i = s.length/2-1; i <= s.length/2; i++)
            answer += s[i];
    }
    else 
        answer += s[Math.floor(s.length/2)];
    
    return answer;
}
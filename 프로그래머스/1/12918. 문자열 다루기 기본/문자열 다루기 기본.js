function solution(s) {
    let answer = true;
    
    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i < s.length; i++) {
            if(s.charCodeAt(i) >= 65) {
                answer = false;
                break;
            }
        }
    }
    else {
        answer = false;
    }
    
    return answer;
}
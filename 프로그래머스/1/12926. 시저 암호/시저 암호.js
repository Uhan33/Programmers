function solution(s, n) {
    let answer = '';  
    let array = Array.from(s).forEach((e) => {
        let result = e.charCodeAt();
        
        if(result > 64 && result <= 90) {
            result += n;
            if(result > 90)
                result -= 26;
        } else if(result > 96 && result <= 122) {
            result += n;
            if(result > 122)
                result -= 26;
        }

        answer += String.fromCharCode(result);
    });
    
    
    return answer;
}
function solution(n) {
    let answer = 0;
    let samjinbub = ''
    while(1) {
        if(n < 3) {
            samjinbub += n;
            break;
        }
        samjinbub += (n%3);
        n = Math.floor(n/3);
    }
    for(let i = 0; i < samjinbub.length; i++) {
       answer += (Number(samjinbub[i])*(3 ** (samjinbub.length-1 - i)));
    }
    
    return answer;
}
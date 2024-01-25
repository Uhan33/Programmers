function solution(a, b, n) {
    let answer = 0;
    let count = 0;
    let cola = n;
    while(1) {
        if(cola%a !== 0) {
            count += cola%a;
        }
        cola = Math.floor(cola/a) * b;
        answer += cola;
        if(cola < a) {
            if(count !== 0) {
                cola += count;
                if(cola < a)
                    break;
                count = 0;    
            }
            else break;
        }
    }
    
    return answer;
}
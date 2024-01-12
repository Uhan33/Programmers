function solution(n, m) {
    let answer = [];
    if(n < m) {
        let j = m;
        for(let i = n; i > 0; i--) {
            if(n%i === 0 && m%i === 0) {
                answer.push(i);
                break;
            }
        }
        for(let i = n; i < 1000000; i += n) {
            if(i === m) {
                answer.push(i)
                break;
            } else if(i > m) {
                m += j;
            }
        }
    }
    else {
        let j = n;
        for(let i = m; i > 0; i--) {
            if(m%i === 0 && n%i === 0) {
                answer.push(i);
                break;
            }
        }
        for(let i = m; i < 1000000; i += m) {
            if(i === n) {
                answer.push(i)
                break;
            } else if(i > n) {
                n += j;
            }
        }
    }
    
    return answer;
}
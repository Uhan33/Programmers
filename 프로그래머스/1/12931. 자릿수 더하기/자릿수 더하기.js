function solution(n)
{
    let N = ``+n
    let answer = 0;
    for(let i = 0; i < N.length; i++)
        answer += Number(N[i]);

    return answer;
}
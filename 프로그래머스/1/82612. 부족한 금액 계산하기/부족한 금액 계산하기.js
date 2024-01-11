function solution(price, money, count) {
    let answer = 0;
    for(let i = 1; i <= count; i++) {
        money -= (price*i);
    }
    money > 0 ? answer = 0 : answer = money*(-1);

    return answer;
}
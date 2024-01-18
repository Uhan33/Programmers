function solution(s) {
    let answer = '';
    let str = '';
    let number = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
    }
    
    for(let i = 0; i < s.length; i++) {
        s[i].charCodeAt() < 64 ? answer += s[i] : str += s[i];

       if(number[str] !== undefined) {
           answer += number[str];
           str = '';
       }
    }
    
    return Number(answer);
}
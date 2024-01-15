function solution(s) {
    let answer = '';
    let array = s.split(" ");
    for(let i = 0; i < array.length; i++) {
        let str = array[i];
        for(let j = 0; j < array[i].length; j++) {
            j%2 === 0 ? answer += str[j].toUpperCase() : answer += str[j].toLowerCase();
        }
        if(i !== array.length-1)
            answer += " ";
    }
    
    return answer;
}
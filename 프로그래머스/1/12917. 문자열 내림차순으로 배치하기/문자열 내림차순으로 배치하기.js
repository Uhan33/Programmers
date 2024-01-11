function solution(s) {
    let answer = '';
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        arr[i] = s.charCodeAt(i);
    }
    arr.sort((a,b) => b-a);
    for(let i = 0; i < arr.length; i++) {
        answer += String.fromCharCode(arr[i]);
    }
    
    return answer;
}
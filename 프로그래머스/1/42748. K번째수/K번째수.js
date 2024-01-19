function solution(array, commands) {
    let answer = [];
    
    commands.forEach(e => {
        let arr = [];
        let command = e;
        for(let i = command[0]-1; i < command[1]; i++) {
            arr.push(array[i]);
        }
    
        for(let i = 0; i < arr.length; i++) {
            for(let j = i+1; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
    
        answer.push(arr[command[2]-1]);
        
    })
    
    
//     for(let a = 0; a < commands.length; a++) {
//         // command = commands[x];
       
//     }
    return answer;
}
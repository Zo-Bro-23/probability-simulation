const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Do you want to keep or change your choice?\nAnswer(keep): ', (answer) => {
    if(answer == 'keep'){
        const choices = ['1', '2', '3']
        let doors = {1: 0, 2: 0, 3: 0}
        let giftDoor
        let choice
        let sum = 0
        
        for(i=0; i<10000000; i++){
            choice = choices[Math.floor(Math.random() * choices.length)]
            giftDoor = choices[Math.floor(Math.random() * choices.length)]
            for(key in doors){
                if(giftDoor == key){
                    doors[key] = 1
                }else {
                    doors[key] = 0
                }
            }
            if(doors[choice] == 1){
                sum += 1
            }
        }
        
        console.log(sum/100000)
    }else if(answer == 'change'){
        const choices = ['1', '2', '3']
        let doors = {1: 0, 2: 0, 3: 0}
        let giftDoor
        let choice
        let sum = 0
        
        for(i=0; i<10000000; i++){
            choice = choices[Math.floor(Math.random() * choices.length)]
            giftDoor = choices[Math.floor(Math.random() * choices.length)]
            for(key in doors){
                if(giftDoor == key){
                    doors[key] = 1
                }else {
                    doors[key] = 0
                }
            }
            if(doors[choice] !== 1){
                sum += 1
            }
        }

        console.log(sum/100000)
    }else {
        const choices = ['1', '2', '3']
        let doors = {1: 0, 2: 0, 3: 0}
        let giftDoor
        let choice
        let sum = 0
        
        for(i=0; i<10000000; i++){
            choice = choices[Math.floor(Math.random() * choices.length)]
            giftDoor = choices[Math.floor(Math.random() * choices.length)]
            for(key in doors){
                if(giftDoor == key){
                    doors[key] = 1
                }else {
                    doors[key] = 0
                }
            }
            if(doors[choice] == 1){
                sum += 1
            }
        }
        
        console.log(sum/100000)
    }
  rl.close();
});
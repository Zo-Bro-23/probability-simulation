let beans
let nuts
let buttons
let horns
let finalArray
let countOfArray
let points = 0
let sum = 0

const possibilities = ['Up', 'Down']

for(v=1; v<1000000; v++){
    for(i=0; i<5; i++){
        beans = possibilities[Math.floor(Math.random() * possibilities.length)]
        nuts = possibilities[Math.floor(Math.random() * possibilities.length)]
        buttons = possibilities[Math.floor(Math.random() * possibilities.length)]
        horns = possibilities[Math.floor(Math.random() * possibilities.length)]
        finalArray = [beans, nuts, buttons, horns]
        countOfArray = finalArray.filter(r => r == 'Up').length

        if(countOfArray == 4){
            points += 5
        }else if(countOfArray == 3){
            points += 2
        }else if(countOfArray == 2){
            points += 1
        }else if(countOfArray == 1){
            points += 2
        }else if(countOfArray == 4){
            points += 5
        }
    }   

    if(points > 10){
        sum += 1
    }

    points = 0
}

console.log(sum/10000)
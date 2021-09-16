const options = [1, 0]
let dice1
let dice2
let dice3
let dice4
let dice5
let dices
let win = true
let i = 0
let sum = 0

for(v=0; v<1000000; v++){
    win = true
    dice1 = options[Math.floor(Math.random() * options.length)]
    dice2 = options[Math.floor(Math.random() * options.length)]
    dice3 = options[Math.floor(Math.random() * options.length)]
    dice4 = options[Math.floor(Math.random() * options.length)]
    dice5 = options[Math.floor(Math.random() * options.length)]
    dices = [dice1, dice2, dice3, dice4, dice5]

    if(dice1 == 1 && dice2 == 1 && dice3 == 1 && dice4 == 1 && dice5 == 1){
        sum += 1
    }else {
        i = 0
        for(key in dices){
            if(dices[key] == 0){
                i += 1
            }
        }
        for(r=0; r<i; r++){
            if(options[Math.floor(Math.random() * options.length)] != 1){
                win = false
            }
        }
        if(win){
            sum += 1
        }
    }
}

console.log(sum/10000)
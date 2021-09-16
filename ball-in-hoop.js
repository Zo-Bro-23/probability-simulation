const options = [1, 1, 1, 0]
let shot1
let shot2
let shot3
let sum = 0

for(v=0; v<10000000; v++){
    for(i=0; i<3; i++){
        shot1 = options[Math.floor(Math.random() * options.length)]
        shot2 = options[Math.floor(Math.random() * options.length)]
        shot3 = options[Math.floor(Math.random() * options.length)]
    }
    
    if(shot1 == 1 && shot2 == 1 && shot3 == 1){
        sum += 1
    }
}

console.log((sum/100000))
const options = [1, 0]
let family1
let family2
let family3
let sum = 0

for(v=0; v<10000000; v++){
    for(i=0; i<3; i++){
        family1 = options[Math.floor(Math.random() * options.length)]
        family2 = options[Math.floor(Math.random() * options.length)]
        family3 = options[Math.floor(Math.random() * options.length)]
    }

    if(family1 == 1 && family2 == 1 && family3 == 1){
        sum += 1
    }
}

console.log((sum/100000))
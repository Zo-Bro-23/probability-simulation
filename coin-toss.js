const options = [1, 0]
let currentOption
let sum = 0

for(i=0; i<100000000; i++){
    currentOption = options[Math.floor(Math.random() * options.length)]
    sum += currentOption
}

console.log(sum/1000000)
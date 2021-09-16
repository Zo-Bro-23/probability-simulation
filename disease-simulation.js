const runSimulationTimes = 100000000
let people = []
let correctPositive = 0
let wrongPositive = 0
let correctTest = []
for(i=1; i<1000; i++){
    correctTest.push(1)
}
correctTest.push(0)
let wrongTest = []
for(i=1; i<50; i++){
    wrongTest.push(0)
}
wrongTest.push(1)
for(i=1; i<10000; i++){
    people.push(0)
}
people.push(1)

for(i=0; i<runSimulationTimes; i++){
    if(people[Math.floor(Math.random() * people.length)] == 1){
        if(correctTest[Math.floor(Math.random() * correctTest.length)] == 1){
            correctPositive ++
        }
    }else {
        if(wrongTest[Math.floor(Math.random() * wrongTest.length)] == 1){
            wrongPositive ++
        }
    }
}

console.log(correctPositive / (correctPositive + wrongPositive))
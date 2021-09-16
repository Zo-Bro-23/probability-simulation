const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://zohan:zohan@cluster0.fu173.mongodb.net/disease-simulation?retryWrites=true&w=majority"
const client = new MongoClient(url, {useUnifiedTopology: true})
const runSimulationTimes = 10000
const diseasePrevelance = 0.0001
const truePositiveRate = 0.999
const falsePositiveRate = 0.02
let falseNegative = 0
let falsePositive = 0
let truePositive = 0
let trueNegative = 0
let db
let collection
let people = []
client.connect((err, client) => {
    db = client.db('disease-simulation')
    collection = db.collection('people')
    for(i=0;i<runSimulationTimes;i++){
        if(Math.random() > diseasePrevelance){
            if(Math.random() > falsePositiveRate){
                trueNegative ++
                people.push({disease: false, test: false})
            }else {
                falsePositive ++
                people.push({disease: false, test: true})
            }
        }else {
            if(Math.random() > truePositiveRate){
                falseNegative ++
                people.push({disease: true, test: false})
            }else {
                truePositive ++
                people.push({disease: true, test: true})
            }
        }
    }
    collection.insertMany(people)
    collection.findOne({_id: 'count'}).then(r => {
        collection.updateOne({_id: 'count'}, {$set: {falseNegative: r.falseNegative + falseNegative, trueNegative: r.trueNegative + trueNegative, falsePositive: r.falsePositive + falsePositive, truePositive: r.truePositive + truePositive}}, {upsert: true})
    })
})

client.close()

console.log('done')
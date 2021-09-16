const express = require('express')
const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://zohan:zohan@cluster0.fu173.mongodb.net/disease-simulation?retryWrites=true&w=majority"
const client = new MongoClient(url, {
    useUnifiedTopology: true,
    reconnectInterval: 1000,
    reconnectTries: Number.MAX_VALUE
})
const connection = client.connect()
const app = express()
let db
let collection
let falseNegative = 0
let trueNegative = 0
let falsePositive = 0
let truePositive = 0
app.listen(5210 || process.env.PORT)

app.get('/backend', (req, resp) => {
    connection.then(() => {
        db = client.db('disease-simulation')
        collection = db.collection('people')
        collection.findOne({_id: 'count'}).then(r => {
            resp.json(
                {
                    total: [
                        ['Rate', 'Number of people'],
                        ['False negative', r.falseNegative],
                        ['False positive', r.falsePositive],
                        ['True positive', r.truePositive],
                        ['True negative', r.trueNegative]
                        ],
                    positive: [
                        ['Rate', 'Number of positive people'],
                        ['True positive', r.truePositive],
                        ['False positive', r.falsePositive]
                    ]
                }
        )
        })
    })
})
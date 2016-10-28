const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://root:fireflame@ds019054.mlab.com:19054/expense_track', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(2000, function() {
  console.log('listening on 2000')
	})
})

 


app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
  res.sendFile("/home/kashish/expenseTracker/public/index.html");

})
app.post('/expenses', function(req, res) {
    db.collection('expenses').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
  
})
})


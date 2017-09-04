const express = require('express')
const knex = require('knex')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res){
  // res.send("working fuck you gregorio")
  knex('Box').select('*').then((boxes) => {
    res.json(boxes);
  })
})


module.exports = app
app.listen(port)

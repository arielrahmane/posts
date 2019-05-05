const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mysql = require('mysql')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ariel",
  database: "posts"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})


app.listen(process.env.PORT || 8081)

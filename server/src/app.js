const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql')
const Sequelize = require('sequelize');
const PostModel = require("../models/post");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('../routes/createPost')(app);

app.listen(process.env.PORT || 8081, "192.168.0.4")

module.exports = app;

/*
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
*/


/*
app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})
*/

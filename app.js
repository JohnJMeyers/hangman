const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const parseurl = require('parseurl')
const session = require('express-session')
const http = require('http')
const path = require('path')
const os = require('os')
const fs = require('fs')
const routes = require('./routes/routes')
const app = express();
app.engine('mustache', mustache());

app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/', routes)
app.use('/hangman', routes)

app.listen(3000, function(req,res){
  console.log('Everything looks good!')
})

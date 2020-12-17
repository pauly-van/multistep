const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(path(__dirname, './client'));


app.get('/', (req, res)=>{
  //do something on get
})

app.post('/', (req, res)=>{
  // do something on post
})


app.listen(port, ()=>'Server listening on port '+port);
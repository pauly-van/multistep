const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));


app.get('/', (req, res)=>{
  //do something on get
})

app.post('/', (req, res)=>{
  db.saveEntry(req.body);
})


app.listen(port, ()=>console.log('Server listening on port '+port));
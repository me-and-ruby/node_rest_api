const express=require('express');
const bodyParser=require('body-parser')
const { db }=require('./db');
var route=require('./controllers/product')

const app=express();

app.use(bodyParser.json({ extended: false }));
//populate request
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/product',route);

app.listen(3000, function(){
  console.log('App is live. listening @ port 3000 >>>>>>')
})
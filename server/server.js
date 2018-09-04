const path=require('path');

const publicPath=path.join(__dirname,'../public');
const express=require('express');
//var bodyParser=require('body-parser');

var app=express();

//app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get("/",(req,res)=>{
 res.render('index.html');
});

app.listen(3000,()=>{
  console.log('3000');
})

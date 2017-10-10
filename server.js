var express = require('express');
var app = express();
var path = require('path');
console.log(__dirname);

app.set('views',path.join(__dirname,"views"));
app.set('view engine','pug');
app.use(express.static("public"));
app.listen(8000,'localhost');


app.get("/",function(req,res){
    res.render('home');
});
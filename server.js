var express = require('express');
var app = express();
console.log(__dirname);
app.set('views',__dirname + '\\views');
app.set('view engine','pug');

app.listen(8000,'localhost');


app.get("/",function(req,res){
    res.render('home');
});
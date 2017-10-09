var express = require('express');
var app = express();
app.set('views','./views');
app.set('view engine','pug');

app.listen(8000);


app.get("/",function(req,res){
    res.render('home');
});
var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(request, response){
    response.send('<h1>Hello world<h1><hr>');
})

app.listen(port,function(){
    console.log('listening port'+ port);
})
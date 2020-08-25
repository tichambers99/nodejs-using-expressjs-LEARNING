var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(request, response){
    response.send('hello world. We are in port:'+port);
})

app.listen(port,function(){
    console.log('listening port'+ port);
})
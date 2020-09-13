const express = require('express');
const bodyParser = require('body-parser')
var userRoute = require('./routes/user.route')
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
    res.render('index',{
        name: 'World'
    });
});

app.use('/users', userRoute);

app.listen(port,function(){
    console.log(`example app listening at http://localhost:${port}`)
})
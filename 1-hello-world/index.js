const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

var users = [
    {id: 1, name: 'Loi'},
    {id: 2, name: 'Hung'},
    {id: 3, name: 'Khang'}
];

app.get('/', function(req, res){
    res.render('index',{
        name: 'Khanh'
    });
});

app.get('/users',function(req, res){
    res.render('users/index',{
        users: users
    });
});

app.get('/users/search',function(req, res){
    var q = req.query.q;
    var matchUser = users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    })
    console.log(req.query);
    res.render('users/index',{
        users: matchUser
    });
})

app.listen(port,function(){
    console.log(`example app listening at http://localhost:${port}`)
})
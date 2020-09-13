var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
    res.render('users/index',{
        users: db.get('users').value()
    });
}

module.exports.search = function(req, res){
    
    var q = req.query.q;
    var matchUser = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    })
    console.log(req.query);
    res.render('users/index',{
        users: matchUser
    });
}

module.exports.create = function(req, res){
    res.render('users/create');
}

module.exports.getID = function(req, res){
    var id = req.params.id;
    console.log(req.params.id);
    var user = db.get('users').find({id: id}).value();
    res.render('users/view',{
        user: user
    });
}

module.exports.postCreate = function(req, res){
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    console.log(req.body);
    res.redirect("/users");
}
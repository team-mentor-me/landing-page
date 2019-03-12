var express = require('express');

module.exports = function(app) {
    app.use('/', express.static('./docs'));
	
    app.get('/', function(req, res){
        //res.render('index', {msg: "Under Construction", usernam: "tester"})
        res.render('index.html', {msg: "Rashid website"})
    });
	
}

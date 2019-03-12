var express = require('express');
var path = require ('path');

var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', [path.join(__dirname, 'src/views')]);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/docs'));

require('./routes')(app);

app.listen(7000, function(){
    console.log('listening to 7000');
})



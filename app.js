var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.get('/', function (req, res) {
    res.render('index');
});

app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('client/static', express.static(path.join(__dirname, 'client/static')));

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});

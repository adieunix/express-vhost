const connect = require('connect');
const express = require('express');
const bodyParser = require('body-parser');
const vhost = require('vhost');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

/* FCLOUD.ID */
var fcloud = express();
fcloud.use(function(req, res){
    if (!module.parent) console.log(req.vhost);
    res.end('Welcome to fcloud.id');
});

/* MITELOR.ID */
var mitelor = express();
mitelor.use(function(req, res){
    if (!module.parent) console.log(req.vhost);
    res.end('Welcome to mitelor.id');
});

/* VHOST */
app.use(vhost('www.fcloud.id', fcloud)); 
app.use(vhost('www.mitelor.id', mitelor));

// Start server
var port = 80;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});
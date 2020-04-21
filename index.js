var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/unsecured', (req, res) => {
    res.status(200).json({success: true});
});

app.get('/secured', (req, res) => {
    if (req.headers['authorization'] && req.headers['authorization'] === 'himanssecureendpoint') {
        res.status(200).json({success: true});
    } else {
        res.status(401).json({success: false});
    }
});

app.listen(3001, function() {
	console.log('Listening on port 3001');
});
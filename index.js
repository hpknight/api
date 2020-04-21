var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// handle CORS requests
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'success'
    });
});

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

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});
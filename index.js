var express = require('express');
var app = express();
const request = require('request');
let path = require('path');

app.use('/public', express.static(__dirname + '/public'));



app.get('/', function (req, res) {




    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/api', function (req, res) {
    console.log("api")

    request('https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=15m', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body) // Print the google web page.
        res.send(body)
     }
})

    
 })

var server = app.listen(20000, function () {
   var host = server.address().address
   var port = server.address().port
   
}) 
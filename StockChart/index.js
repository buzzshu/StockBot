var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var path = require("path");
const { json } = require('body-parser');
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.send('hello world');
})

app.get('/chart', function (req, res) {
  res.send('Hello!');
})

app.get('/chart/:id', function (req, res) {
    // get stock data
    var x = Date.now();
    var y = "https://query1.finance.yahoo.com/v8/finance/chart/" + req.params.id + ".TW?period1=" + parseInt((x - 5184000000) / 1000) + "&period2=" + parseInt(x / 1000) + "&interval=1d&events=history&=hP2rOschxO0";
    console.log(y);
    request({
        uri:"https://query1.finance.yahoo.com/v8/finance/chart/" + req.params.id + ".TW?period1=" + parseInt((x - 5184000000) / 1000) + "&period2=" + parseInt(x / 1000) + "&interval=1d&events=history&=hP2rOschxO0",
        json:true,
        },function(error, response, body){
            if(!error && response.statusCode == 200){

            //works well
            console.log("[Yahoo Finance API] Success");

            // render out
            res.render('index', {
                stockData: body
            })

        }else{
            console.log("[Yahoo Finance API] failed");
        }
    });

    
})

app.listen(port, function () {
  console.log('Server started at http://localhost:' + port);
})
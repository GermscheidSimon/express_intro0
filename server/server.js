const express = require('express'); // require express dependecy into server
const bodyParser = require('body-parser'); // require body parser into server

const app = express(); //define app
const port = 5000; //define network port

// get client site files
app.use(express.static('./server/public')); // initialize public 

app.use(bodyParser.urlencoded({extended: true}));

const quotesData = require('./modules/quotes');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/quotes', (req, res) => {

    res.send(quotesData.list);
});



app.get('/randomquotes', (req, res) => {
    res.send(quotesData.list[getRandomInt(0, quotesData.list.length -1)]);
});

app.post('/quotes', (req, res) =>{
    //
    quotesData.list.push(req.body)
    console.log(quotesData);
    res.sendStatus(200);
})


app.listen(port, () => {
    console.log('Server loaded on port:', port);
});
const express = require('express');

const app = express();
const port = 5000;

// get client site files
app.use(express.static('./server/public'));


let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    res.send(quotesData);
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

app.get('/randomquotes', (req, res) => {
 
   let num =  getRandomArbitrary(0, quotesData.length);
    res.send(quotesData[num]);
});

app.listen(port, () => {
    console.log('Server loaded on port:', port);
});
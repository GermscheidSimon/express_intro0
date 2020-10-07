

console.log('hello from JS');

$(document).ready(onReady)

function onReady() {
    console.log('hellow from JQ');
    // perform GET request from server
    getRandomQuote();
}

function getRandomQuote(){
    console.log('retrieve data request dispatched');
    $.ajax({
        method: 'GET',
        url: '/randomquotes'
    }).then( (response) => {
        console.log(response);
       appendToDOM(response)
    });
}

function appendToDOM(res) {
    $('#output').append(`${res.quote} by ${res.author}`);
}


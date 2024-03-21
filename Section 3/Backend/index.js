// import express
const express = require('express')

// initialize express app
const app = express();
const port = 5000;

app.get('/', (req,res) => {
    res.send('response from express');
});

app.get('/add', (req,res) => {
    res.send('add response');
});



app.listen(port, () => {console.log('server started');} );
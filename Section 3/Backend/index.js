// import express
const express = require('express')
const postRouter = require('./routers/postRouters');

// initialize express app
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin
}))
app.use('/post', postRouter );

app.get('/', (req,res) => {
    res.send('response from express');
});

app.get('/add', (req,res) => {
    res.send('add response from express');
});



app.listen(port, () => {console.log('server started');} );
// import express
const express = require('express');
const postRouter = require('./routers/postRouters');
const utilRouter = require('./routers/utilRouter');
const cors = require('cors');

// initialize express app
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use( '/post', postRouter );
app.use( '/util', utilRouter );

app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('add response from express');
});

app.listen( port, () => { console.log('server started'); } );
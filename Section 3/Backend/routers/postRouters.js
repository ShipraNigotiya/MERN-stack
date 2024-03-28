const express = require('express');
const router = express.Router();
const model = require('../models/postModels');

router.get('/add', (req,res) => {
    console.log(req.body);
    new model(req.body).save()
});

router.get('/getall', (req,res) => {
    res.send('getall response from post router');
});

router.get('/update', (req,res) => {
    res.send('update response from post router');
});

router.get('/delete', (req,res) => {
    res.send('delete response from post router');
});
// getall
// delete
// update

module.exports = router;


const express = require('express');
const router = express.Router();
const Model = require('../models/postModels');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// : denote url parameter

router.delete('/delete/:id', (req, res) => {
   Model.findByIdAndDelete(req.params.id)
   .then((result) => {
    res.status(200).json(result);
    })
   .catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

router.put('/update', (req, res) => {
   Model.findByIdAndUpdate(req.param.id, req.body)
   .then((result) => {
    res.status(200).json(result);
    })
   .catch((err) => {
    console.log(err);
    res.status(500).json(err);
   });
});

module.exports = router;
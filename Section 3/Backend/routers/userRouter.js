const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');

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

router.post("/authenticate", (req, res) => {
console.log(req.body);
model.find(req.body)
// for generation JWT required 4 things 1 payload 2
.then((result) => {
if (result){
const {_id, name, email} = result;
const payload = {_id, name, email};
jwt.sign
 {
payload,
process.env.JWT_SECRET,
{expiry: '2 days'},
(err, token) => {
if(err) {
res.status(500).json({message: 'error creating token'})
}else{
res.status(200).json({token, role: result.role})
}
}
}

}else{
    res.status(401).json({message:'Invalid Credentials'})
}
})
.catch((err) => {
 console.log(err);
 res.status(500).json(err);
});
});

module.exports = router;
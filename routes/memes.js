var express = require('express');
var router = express.Router();
const env = require('../data/env.json');
// const { resolve } = require('path');
const axios = require('axios');

//BM New API endpoint to use for the data from the soccer API
let memesData;
router.get('/', (req, res) => {
    if(!memesData || !req.user){
        axios.get(`${env.memesApiEndpoint}`)
        .then(response => {
            memesData = response.data;
            res.render('memes', { memesData, req, user: null });
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        res.render('memes', { memesData, req, user: req.user });
    }
});

module.exports = router;

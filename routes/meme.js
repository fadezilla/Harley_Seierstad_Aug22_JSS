var express = require('express');
var router = express.Router();
const env = require('../data/env.json');
const axios = require('axios');
//const { resolve } = require('path');

router.get('/', (req, res) => {
    const id = req.query.id;
    axios.get(`${env.memesApiEndpoint}`)
    .then(response => {
        const memes = response.data.data.memes;
        const selectedMeme = memes.find(meme => meme.id === id);
        if (!selectedMeme) {
            return res.status(404).send("Meme not found");
        }
        res.render('meme', { selectedMeme });
    })
    .catch(error => {
        console.log(error);
    });
});

module.exports = router;

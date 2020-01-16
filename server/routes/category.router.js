const express = require('express');
const pool = require('../modules/pool');
const axios = require(`axios`);
const dotenv = require(`dotenv`);

const router = express.Router();
dotenv.config();

router.get('/:id', (req, res) => {
    console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
    let apiKey = process.env.API_KEY;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.params.id}`)
    .then(response=>{
        res.send(response.data.data);
    })
    .catch(error=>{
        console.log('error in Giphy trending GET', error);
        res.sendStatus(500);
    })
})

module.exports = router;

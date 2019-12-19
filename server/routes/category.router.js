const express = require('express');
const pool = require('../modules/pool');
const axios = require(`axios`);
const dotenv = require(`dotenv`);

const router = express.Router();
dotenv.config();

// router.get('/', (req, res) => {
//     // return all categories
//     const queryText = `SELECT * FROM category ORDER BY name ASC`;
//     pool.query(queryText)
//         .then( (result) => {
//             res.send(result.rows);
//         })
//         .catch( (error) => {
//             console.log(`Error on query ${error}`);
//             res.sendStatus(500);
//         });
// });

router.get('/', (req, res) => {
    console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
    let apiKey = process.env.API_KEY;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cheeseburger`)
    .then(response=>{
        res.send(response.data.data);
    })
    .catch(error=>{
        console.log('error in Giphy trending GET', error);
        res.sendStatus(500);
    })
})

module.exports = router;

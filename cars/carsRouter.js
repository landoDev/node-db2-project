const express = require('express');
const db = require('../data/db-config')
const router = express.Router();

router.get('/', (req, res) =>{
    // get end point
    db('*').from('cars')
    db('cars')
    .then(cars =>{
        res.status(200).json(cars)
    })
    .catch(err=>{
        res.status(500).json({ error: 'Could not get cars'})
    })
    
})

module.exports= router;
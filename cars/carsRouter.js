const express = require('express');
const db = require('../data/db-config')
const router = express.Router();

router.get('/', (req, res) =>{
    // get end point
    // db('*').from('cars')
    db('cars')
    .then(cars =>{
        res.status(200).json(cars)
    })
    .catch(err=>{
        res.status(500).json({ error: 'Could not get cars'})
    })
    
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cars').where({ id })
    .first()
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Could not get car' });
    });
  });
  
  router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
        const id = ids[0];
        db('cars').where({ id })
        .then(newInventory => {
            res.status(201).json(newInventory);
        });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });

module.exports= router;
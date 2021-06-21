// DO YOUR MAGIC

const express = require('express');
const db = require("../../data/dbConfig.js")
// lines 4 through 12 are commented out to give example of what NOT to do (db stuff should not be here)
// const knex = require('knex');

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id }).first()
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve car' });
        });
});

// router.post('/', (req, res) => {
//     const carData = req.body;
//     db('cars').insert(carData)
//         .then(ids => {
//             return db('fruits').where({ id: ids[0] })
//         })
//         .then(newCarEntry => {
//             res.status(201).json(newCarEntry);
//         })
//         .catch(err => {
//             console.log('POST error', err);
//             res.status(500).json({ message: "Failed to store data" });
//         });
// });

module.exports = router;

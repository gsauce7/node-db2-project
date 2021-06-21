// DO YOUR MAGIC
const router = require("express").Router();
const Car = require("./cars-model");
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware");


router.get('/', async (req, res, next) => {
    try {
        const data = await Car.getAll();
        res.json(data);
    } catch (err) {
        next(err);
    }
    // db('cars')
    //     .then(cars => {
    //         res.json(cars);
    //     })
    //     .catch(err => {
    //         res.status(500).json({ message: err.message });
    //     });
});

router.get('/:id', checkCarId, async (req, res) => {
    const { id } = req.params;
    returnedCar = await Car.getById(id);
    Car.getById(id)
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve car' });
        });
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
        const newCar = await Car.create({ vin: req.body.vin.trim(), make: req.body.make.trim(), model: req.body.model.trim(), mileage: req.body.mileage });
        res.status(201).json(newCar);
    } catch (err) {
        next(err);
    }

    // const carData = req.body;
    // db('cars').insert(carData)
    //     .then(ids => {
    //         return db('cars').where({ id: ids[0] })
    //     })
    //     .then(newCarEntry => {
    //         res.status(201).json(newCarEntry);
    //     })
    //     .catch(err => {
    //         console.log('POST error', err);
    //         res.status(500).json({ message: "Failed to store data" });
    //     });
});

module.exports = router;

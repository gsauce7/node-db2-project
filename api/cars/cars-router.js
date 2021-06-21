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



router.post("/", checkCarPayload, checkVinNumberValid, /*checkVinNumberUnique,*/ async (req, res, next) => {
    // DO YOUR MAGIC
    try {
        const newCar = await Car.create({
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            title: req.body.title,
            transmission: req.body.transmission
        });
        res.status(201).json(newCar);
    } catch (err) {
        next(err);
    }
});

module.exports = router;

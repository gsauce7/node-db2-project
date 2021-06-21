const Car = require("./cars-model");

const checkCarId = async (req, res, next) => {

  try {
    const { id } = req.params;
    const car = await Car.getById(id);
    if (!car) {
      res.status(404).json({ message: `car with id ${id} is not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body;
  // const field_name = (vin || make || model || mileage);
  if (vin === undefined) {
    res.status(400).json({ message: `vin is missing` });
  } else if (make === undefined) {
    res.status(400).json({ message: `make is missing` });
  } else if (model === undefined) {
    res.status(400).json({ message: `model is missing` });
  } else if (mileage === undefined) {
    res.status(400).json({ message: `mileage is missing` });
  } else if (typeof vin !== "string") {
    res.status(400).json({ message: `vin must be a string` });
  } else if (typeof make !== "string") {
    res.status(400).json({ message: `make must be a string` });
  } else if (typeof model !== "string") {
    res.status(400).json({ message: `model must be a string` });
  } else if (typeof mileage !== "number") {
    res.status(400).json({ message: `mileage must be a number` });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  if (vin.length < 17 || vin.length > 17) {
    res.status(400).json({ message: `vin ${vin} is invalid` });

  } next()
};


const checkVinNumberUnique = async (req, res, next) => {
  const givenVin = req.params.vin;
  const exists = await Car.filterByVin(givenVin);
  console.log(`Gabriel: ${exists}`)

  // if you have to deep check object 

  if (exists.vin) {
    res.status(400).json({ message: `vin ${givenVin} already exists` })
  } next()


}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};
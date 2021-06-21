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
  const field_name = (vin || make || model || mileage);
  if (field_name === undefined) {
    res.status(400).json({ message: `${field_name} is missing` });
  } else if (typeof vin !== "string") {
    res.status(400).json({ message: `${vin} must be a string` });
  } else if (typeof make !== "string") {
    res.status(400).json({ message: `${make} must be a string` });
  } else if (typeof model !== "string") {
    res.status(400).json({ message: `${model} must be a string` });
  } else if (typeof mileage !== "number") {
    res.status(400).json({ message: `${mileage} must be a number` });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  if (vin.trim().length !== 17) {
    res.status(400).json({ message: `vin ${vin} is invalid` });

  }
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const allCars = await Car.getAll()
  if (allCars.some(car => car.vin == req.body.vin.trim() && car.id != req.params.id)) {
    return res.status(400).json({ message: `vin ${vin} already exists` })
  }
  next()
}


module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};
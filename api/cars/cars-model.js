const db = require("../../data/db-config")

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars"); // select * from cars and return
};

const getById = () => {
  // DO YOUR MAGIC
  return db("cars").where("id", id).first()
};

const create = async (car) => {
  // DO YOUR MAGIC
  const [id] = await db("cars").insert(car);
  return getById(id);
};










// maybe I will use this too from my previous project...

// const updateById = async (id, account) => {
//   // DO YOUR MAGIC
//   await db("accounts").where("id", id).update(account);
//   return getById(id);
// };


// const deleteById = async (id) => {
//   // DO YOUR MAGIC
//   const deletedAccount = await getById(id);
//   await db("accounts").where("id", id).delete();
//   return deletedAccount;
// };


// module.exports = {
//   getAll,
//   getById,
//   create,
//   updateById,
//   deleteById
// };

// DO YOUR MAGIC

exports.up = function (knex) {
    return knex.schema.createTable("cars", table => {
        table.increments()
        table.text("vin", 17)
        table.text("make")
        table.text("model")
        table.decimal("mileage")
        table.text("title")
        table.text("transmission")
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars")
};
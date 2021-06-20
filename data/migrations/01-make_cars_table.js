// DO YOUR MAGIC

exports.up = function (knex) {
    return knex.schema.createTable("cars", table => {
        table.increments()
        table.text("vin", 17).required().unique().notNullable()
        table.text("make").required().notNullable()
        table.text("model").required().notNullable()
        table.decimal("mileage").required().notNullable()
        table.text("title")
        table.text("transmission")
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars")
};
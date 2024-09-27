// DO YOUR MAGIC

exports.up = function (knex) {
    return knex.schema.createTable("cars", table => {
        table.increments()
        table.text("vin", 17).unique().notNullable()
        table.text("make").notNullable()
        table.text("model").notNullable()
        table.decimal("mileage").notNullable()
        table.text("title")
        table.text("transmission")
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars")
};
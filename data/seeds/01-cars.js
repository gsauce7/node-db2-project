// STRETCH

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('cars').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('cars').insert([
                { vin: "ch8rd72fgere6j8g7", make: "Tesla", model: "Model S", mileage: 0 },
                { vin: "xh6rd72fgere6j8g6", make: "Tesla", model: "Model 3", mileage: 0 },
                { vin: "xh6rd72fgere6j8g5", make: "Tesla", model: "Model X", mileage: 0 },
                { vin: "xh6rd72fgere6j8g4", make: "Tesla", model: "Model Y", mileage: 0 }
            ]);
        });
};

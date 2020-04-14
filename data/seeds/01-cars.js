
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries

      return knex('cars').insert([
        {id: 1, vin: '1FTRX14W67FA13057', make: 'Ram', model: '2500', mileage: 58000, transmission: 'auto', titleStatus: null},
        {id: 2, vin: '2G2WS522651153675', make: 'Dodge', model: 'Challenger', mileage: 12000, transmission: 'manual', titleStatus: null},
        {id: 3, vin: '2GKFLTE32F6260863', make: 'Tesla', model: 'Model X', mileage: 80000, transmission: 'auto', titleStatus: 'clean'},
      ]);
    });
};

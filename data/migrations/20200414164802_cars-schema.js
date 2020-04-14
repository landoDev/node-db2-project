
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
      tbl.decimal('vin', 17).unique().notNullable();
      tbl.string('make', 128).unique().notNullable();
      tbl.string('model', 128).unique().notNullable();
      tbl.decimal('mileage').unique().notNullable();
      tbl.string('transmission', 128);
      tbl.string('titleStatus', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};

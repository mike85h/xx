
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Box', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
    table.dateTime('date').notNullable();
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Box');
};

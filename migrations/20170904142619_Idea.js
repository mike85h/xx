
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Idea', (table) => {
    table.increments();
    table.text('name').notNullable().unique();
    table.dateTime('date').notNullable();
    table.text('content').notNullable();
    table.integer('upvote').defaultTo(0);
    table.integer('downvote').defaultTo(0);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Idea');
};

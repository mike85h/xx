
exports.seed = function(knex, Promise) {
  return knex('Box').del()
    .then(function () {
      return knex('Box').insert([
        {
          id: 1,
          name: 'test1',
          date: '2004-10-19 10:23:54+02',
          description: 'blah blah 1'},
        {
          id: 2,
          name: 'test2',
          date: '2004-10-20 10:23:54+02',
          description: 'blah blah 2'},
        {
          id: 3,
          name: 'test3',
          date: '2004-10-21 10:23:54+02',
          description: 'blah blah 3'
        }
      ]);
    });
};

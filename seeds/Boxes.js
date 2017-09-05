
exports.seed = function(knex, Promise) {
  return knex('Box').del()
    .then(function () {
      return knex('Box').insert([
        {
          Id: 1,
          Name: 'test1',
          Description: 'blah blah 1',
          CreationDate: '2004-10-19 10:23:54+02'
        },
        {
          Id: 2,
          Name: 'test2',
          Description: 'blah blah 2',
          CreationDate: '2004-10-20 10:23:54+02'
        },
        {
          Id: 3,
          Name: 'test3',
          Description: 'blah blah 3',
          CreationDate: '2004-10-21 10:23:54+02'
        }
      ]);
    });
};

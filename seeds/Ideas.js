
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Idea').del()
    .then(function () {
      // Inserts seed entries
      return knex('Idea').insert([
        {
          Id: 1,
          BoxId: 1,
          Name: 'test1',
          Content:'blah flag blag blah1',
          UpVotes: 0,
          DownVotes: 0,
          CreationDate: '2004-10-22 10:23:54+02'
        },
        {
          Id: 2,
          BoxId: 1,
          Name: 'test2',
          Content: 'blah flag blag blah2',
          UpVotes: 0,
          DownVotes: 0,
          CreationDate: '2004-10-23 10:23:54+02'
        },
        {
          Id: 3,
          BoxId: 1,
          Name: 'test3',
          Content: 'blah flag blag blah3',
          UpVotes: 0,
          DownVotes: 0,
          CreationDate: '2004-10-24 10:23:54+02'
        }
      ]);
    });
};

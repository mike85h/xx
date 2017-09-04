
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Idea').del()
    .then(function () {
      // Inserts seed entries
      return knex('Idea').insert([
        {
          id: 1,
          name: 'test1',
          date: '2004-10-22 10:23:54+02',
          content: 'blah flag blag blah1',
          upvote: 0,
          downvote: 0
        },
        {
          id: 2,
          name: 'test2',
          date: '2004-10-23 10:23:54+02',
          content: 'blah flag blag blah2',
          upvote: 0,
          downvote: 0
        },
        {
          id: 3,
          name: 'test3',
          date: '2004-10-24 10:23:54+02',
          content: 'blah flag blag blah3',
          upvote: 0,
          downvote: 0
        }
      ]);
    });
};

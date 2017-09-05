const express = require('express')
const knex = require('./db/knex')
const app = express()
const port = 8080//process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



//validation start

  //validate input
function validateInput(data) {
  //some logic. return true only if validation succeeds
  return true;
}

  //validate id
function validateId(req, res, next) {
  let id = req.params.id;
  if(!isNaN(id)){
    return next();
  } else {
    res.json({message: 'Invalid ID parameter'})
  }
}
//validation end



//general route
app.get('/', function(req, res){
  res.send("yo bitchass, go to /boxes or /ideas to get some json shizz.")
})


//routes for boxes:

  //get all boxes
app.get('/boxes', function(req, res){
  knex('Box').select('*').then((boxes) => {
    res.json(boxes);
  })
  .catch(error => res.json({ error }))
})
  //get box by id
app.get('/boxes/:id', validateId, (req, res) => {
  let id = req.params.id
  knex('Box')
  .where('Id',id).first()
  .then((data) => {
    res.json(data)
  })
  .catch(error => res.json({ error }))
});
  //post new box
app.post('/boxes', (req,res) => {
  let post = req.body;
  if (validateInput(post)) {
    knex('Box').insert(post)
    .returning('*')
    .then(data => {
      res.json(data);
    });
  } else {
    res.json({message: 'Invalid Box'})
  }
});
  //edit box
app.put('/boxes/:id', validateId, (req, res) => {
  let id = req.params.id;
  let edit = req.body;
  if(validateInput(edit)) {
    knex('Box').where('Id', id)
  }
})
  //delete box
app.delete('/boxes/:id', validateId, (req, res) => {
  let id = req.params.id;
  knex('Box')
  .where('Id',id).del()
  .then(deleted => {
    res.json({
      message: 'Box deleted',
      deleted: deleted
    });
  });
});

//Routes for ideas:

  //get all ideas
app.get('/ideas', function(req,res){
  knex('Idea').select('*').then((boxes) => {
    res.json(boxes);
  })
  .catch(error => res.json({ error }))
})
  //get idea by id
app.get('/ideas/:id', validateId, (req, res) => {
  let id = req.params.id
  knex('Idea')
  .where('Id',id).first()
  .then((data) => {
    res.json(data)
  })
  .catch(error => res.json({ error }))
});
  //post to ideas
app.post('/ideas', (req,res) => {
  let post = req.body;
  if (validateInput(post)) {
    knex('Idea').insert(post)
    .returning('*')
    .then(data => {
      res.json(data);
    });
  } else {
    res.json({message: 'Invalid idea'})
  }
});
  //edit idea
app.put('/ideas/:id', validateId, (req,res) => {
  let id = req.params.id;
  let edit = req.body;
  if (validateInput(edit)) {
    knex('Idea').where('Id', id)
    .update(edit)
    .returning('*')
    .then(edited => {
      res.json(edited);
    });
  } else {
    res.json({message: 'Invalid input'})
  }
});
  //delete idea
app.delete('/ideas/:id', validateId, (req, res) => {
  let id = req.params.id;
  knex('Idea')
  .where('Id',id).del()
  .then(deleted => {
    res.json({
      message: 'Idea deleted',
      deleted: deleted
    });
  });
});

module.exports = app
app.listen(port)

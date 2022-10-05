const db = require('./db.js');
require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json())
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// Other routes here....
app.get('/glossaryList', (req, res) => {

  // const laptop = new db.GloModel({ wordname: 'laptop', definition: 'a small computer you can use on your lap'});
  // const desktop = new db.GloModel({ wordname: 'desktop', definition: 'a large computer'});
  // laptop.save((err) => {
  //   if (err) return handleError(err);
  // })
  // desktop.save((err) => {
  //   if (err) return handleError(err);
  // })
  db.listSave()
  .then(() => {
    console.log('save succeed')
     db.listGet()
     .then((data) => {
      res.send(JSON.stringify(data))
     })
  })
  .catch((err) => {
    console.log(err);
    res.end();
  })
})

// app.post()
app.post('/glossaryList', (req, res) => {
  var eachglossary = req.body;
  db.listSave(eachglossary)
  .then((eachglossary) => {
    console.log('your glossary saved!!')
    res.send('your glossary saved')
  })
  .catch((err) => {
    res.send(err);
  })
})

// app.put()

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

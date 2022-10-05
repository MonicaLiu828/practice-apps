const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');


const glossarySchema = new mongoose.Schema({
 wordname: {
  type: String,
  unique: true
 },
 definition: String
});

const GloModel = mongoose.model('glossaryList', glossarySchema);


// const laptop = new GloModel({ wordname: 'laptop', definition: 'a small computer you can use on your lap'});
// const desktop = new GloModel({ wordname: 'desktop', definition: 'a large computer'});

const listSave = function (data) {
  const laptop = new GloModel({ wordname: 'laptop', definition: 'a small computer you can use on your lap'});
  const desktop = new GloModel({ wordname: 'desktop', definition: 'a large computer'});

  // var res = [laptop.save(), desktop.save()];
  laptop.save().catch((err) => {
    console.log(err);
  })
  desktop.save().catch((err) => {
    console.log(err);
  })
  var res = [];
  if (data !== undefined) {
    const eachData = new GloModel(data);
    res.push(eachData.save());
  }
  return Promise.all(res)
}

const listGet = function () {
  return GloModel.find().exec()
}

// laptop.save((err) => {
//   if (err) {
//     console.log(err)
//   }

// })
// desktop.save((err) => {
//   if (err) {
//     console.log(err);
//   }
// })

module.exports.GloModel = GloModel;
module.exports.listSave = listSave;
module.exports.listGet = listGet;


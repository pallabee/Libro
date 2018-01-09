'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
categoryid: { type: String, required: true },
categoryname: { type: String},
image: { type: String},
creationdate: { type: Date },
lastmodifieddate:{ type: Date },
});

// CategorySchema.pre('save', function(next) {
//
// //add error handling here
// });

// CategorySchema.statics.findByID = function findByID(categoryid, callback) {
// this.findOne({ categoryid: categoryid }, callback);
//
// //add error handling here
// }


CategorySchema.statics.findAll=function(cb){
  this.find({})
  .exec(function(err,categories){
    if(!err)
    {
      //console.log('data'+categories)
      cb(null,categories);

    }
    else
      {
        //console.log('ERR'+err)
        cb(err,null);
      }
    });
  };

module.exports = mongoose.model('categories', CategorySchema);

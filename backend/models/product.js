'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
sku: { type: String, required: true },
displayname: { type: String, required: true },
format: { type: String },
categoryids: [
 {type: String}
],
price: { type: String },
description: { type: String },
image: { type: String },
creationdate: { type: Date },
lastmodifieddate:{ type: Date },
});

ProductSchema.pre('save', function(next) {
// this.slug = slugHelper.createSlug(this.displayname);
next();
//add error handling here
});

ProductSchema.statics.findBySKU = function findBySKU(sku, callback) {
this.findOne({ sku: sku }, callback);
}
ProductSchema.statics.findByCategory = function findByCategory(categoryid, callback) {
this.find({ "categoryids": { "$elemMatch": { "$eq": categoryid } } },{sku:1,displayname: 1,price: 1,image:1,description:1,_id:0})
.exec(function(err,products){
    if(!err)
    {
      //console.log('data'+categories)
      callback(null,products);

    }
    else
      {
        //console.log('ERR'+err)
        callback(err,null);
      }
    });
}

// ProductSchema.statics.findBySlug = function findBySlug(sku, callback) {
// this.findOne({ slug: slug }, callback);
// }

module.exports = mongoose.model('products', ProductSchema);

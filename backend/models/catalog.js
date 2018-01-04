'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatalogSchema = new Schema({
catalogid: { type: String, required: true },
catalogname: { type: String}
});

CatalogSchema.pre('save', function(next) {

//add error handling here
});

CatalogSchema.statics.findByID = function findByID(categoryid, callback) {
this.findOne({ catalogid: catalogid }, callback);

//add error handling here
}

module.exports = mongoose.model('Catalog', CatalogSchema);

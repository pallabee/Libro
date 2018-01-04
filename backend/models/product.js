'use strict';

const mongoose = require('mongoose');

const slugHelper = require('../helpers/slug');

const Schema = mongoose.Schema;

const Mixed = Schema.Types.Mixed;

const ProductSchema = new Schema({
sku: { type: String, required: true },
displayname: { type: String, required: true },
slug: { type: String },
description: { type: String },
categoryids: { type:[
catid: {type: String}
]},
price: { type: Double },
details: { type: Mixed },
images: { type: [
{
caption: { type: String },
filename: { type: String }
}
] },
creationdate: { type: Date },
lastmodifieddate:{ type: Date },
//need to check the logic for activating product
active: { type: Boolean, default: false }
});

ProductSchema.pre('save', function(next) {
this.slug = slugHelper.createSlug(this.displayname);
next();
//add error handling here
});

ProductSchema.statics.findBySKU = function findBySKU(sku, callback) {
this.findOne({ sku: sku }, callback);
}

ProductSchema.statics.findBySlug = function findBySlug(sku, callback) {
this.findOne({ slug: slug }, callback);
}

module.exports = mongoose.model('Product', ProductSchema);

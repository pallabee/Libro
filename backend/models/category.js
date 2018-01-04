'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
categoryid: { type: String, required: true },
categoryname: { type: String},
childcategories: { type:[
categoryid: {type: String}
]},
parentcategories: { type:[
categoryid: {type: String}
]},
image: { type: [
{
caption: { type: String },
filename: { type: String }
}
] },
catalogId: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Catalog'
},
creationdate: { type: Date },
lastmodifieddate:{ type: Date },
root: { type: Boolean, default: false },
active:{ type: Boolean, default: false }
});

CategorySchema.pre('save', function(next) {

//add error handling here
});

CategorySchema.statics.findByID = function findByID(categoryid, callback) {
this.findOne({ categoryid: categoryid }, callback);

//add error handling here
}

module.exports = mongoose.model('Category', CategorySchema);

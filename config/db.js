'use strict';

const mongoose = require('mongoose');
const db = require('./index');

module.exports.connect = connectmongo;

function connectmongo(app) {
mongoose.connect(db.mongodb.uri);
return mongoose;
};

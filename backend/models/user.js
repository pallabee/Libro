'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
email: {
type: String,
required: true,
unique: true
},
name: {
type: String
},
createdAt: {
type: Date,
default: Date.now
}

});

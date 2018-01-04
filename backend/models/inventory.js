'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
_id: { type: String },
createdAt: { type: Date, default: Date.now },
startDate: { type: Date, default: Date.now },
endDate: { type: Date, default: Date.now },
displayname: { type: String },
description: { type: String },
catalogid: { type: mongoose.Schema.Types.ObjectId,ref: 'Catalog'},
availabilityStatus: { type: String },
availabilityDate: { type: Date, default: Date.now },
stocklevel: { type: Integer },
stockthreshold: { type: Integer },
stockthreshold: { type: Integer },
productid: { type: mongoose.Schema.Types.ObjectId,ref: 'Product'}

});
//update inventory
module.exports = mongoose.model('Inventory', InventorySchema);

const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClientSchema = Schema({
  document: {type: String, default: null, required: true},
  name: {type: String, default: null, required: false},
  email: {type: String, default: null, required: false},
  phone: {type: String, default: null, required: false},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
});

ClientSchema.pre('findOneAndUpdate',  function (next) {
  const currentDate = new Date();
  this._update.updated_at = currentDate;
  next();
});

ClientSchema.set('toObject', { virtuals: true })
ClientSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('clients', ClientSchema);

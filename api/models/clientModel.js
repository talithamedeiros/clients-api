'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var clientSchema = new Schema({
   nome: {
      type: String
   },
   idade: {
       type: Number
   },
   cpf: {
       type: String
   },
   telefone: {
       type: String
   },
   email: {
      type: String
   },
   Created_date: {
      type: Date,
      default: Date.now
   }
});
module.exports = mongoose.model('Clients', clientSchema);
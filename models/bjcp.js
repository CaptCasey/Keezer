var mongoose = require('mongoose');

var BJCPSchema = new mongoose.Schema({
  beers: {type: Array, required: true}
});


var BJCP = mongoose.model('BJCP', BJCPSchema, 'BJCP');
module.exports = BJCP;



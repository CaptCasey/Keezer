var mongoose = require('mongoose');

var KeezerSchema = new mongoose.Schema({
  TapNumber: {type: String, required: true, trim: true},
  BeerName: {type: String, required: true},
  BJCPstyle: {type: String, required: true},
  IBU: {type: String, required: true},
  Hops: {type: String, required: true },
  SRM: {type: String, required: true},
  Volume: {type: String, required: true},
  OG: {type: String, required: true},
  FG: {type: String, required: true},
  BrewDate: {type: String, required: true},
  KegDate: {type: String, required: true}
});


var Keezer = mongoose.model('Keezer', KeezerSchema, 'Keezer');
module.exports = Keezer;



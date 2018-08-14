var express = require('express');
var router = express.Router();
var Keezer = require('../models/keezer');
var BJCP = require('../models/bjcp');

//Render Index
router.get('/', function (req, res) {
  Keezer.find({}, null, {sort: {TapNumber: 1}}, function (err, data) {
    if (err) throw err;
    return  res.render('index.ejs',{data: data});
  });
});

//Render Update
router.get('/update', function (req, res) {
  BJCP.find({}, function (err, data) {
    if (err) throw err;
    return  res.render('update.ejs',{data: data});
  });
});

//Update Tap
router.post('/tapUpdate', function (req, res) {
  if (req.body) {
    var tapData = {
      TapNumber: req.body.TapNumber, BeerName: req.body.BeerName, BJCPstyle: req.body.BJCPstyle,
      IBU: req.body.IBU, Hops: req.body.Hops, SRM: req.body.SRM, Volume: req.body.Volume,
      OG: req.body.OG, FG: req.body.FG, BrewDate: req.body.BrewDate, KegDate: req.body.KegDate}
    Keezer.findOneAndUpdate({TapNumber: tapData.TapNumber}, {$set:{
      BeerName:tapData.BeerName, BJCPstyle:tapData.BJCPstyle, IBU:tapData.IBU, Hops:tapData.Hops, 
      SRM:tapData.SRM, Volume:tapData.Volume, OG:tapData.OG, FG:tapData.FG, BrewDate:tapData.BrewDate,
      KegDate:tapData.KegDate }}, {new: true}, function(err, user) {
      if (err) throw err;
      return res.redirect('/');
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    throw err;
  }
});

//Light on
router.post('/lightOn', function (req, res) {
  console.log("lightOn");
});

//Light off
router.post('/lightOff', function (req, res) {
  console.log("lightOff");
});


module.exports = router;
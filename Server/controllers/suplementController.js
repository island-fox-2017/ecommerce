'use strict'

var Suplement = require('../models/suplement');

var createSuplement = (req,res) => {
  Suplement.create({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result)
  })
}

var getAllSuplement = (req,res) => {
  Suplement.find({},(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

var updateSuplement = (req,res) => {
  Suplement.update(
    {id: req.params.id},{$set: req.body},(err,result) => {
      if(err) res.send(err)
      res.send(result)
    })
}

var deleteSuplement = (req,res) => {
  Suplement.findByIdAndRemove(req.params.id,(err) => {
    if(err) res.send(err)
    res.send('data already deleted')
  })
}

var getOneSuplement = (req,res) => {
  Suplement.findById(req.params.id,(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

module.exports = {
  createSuplement,
  getAllSuplement,
  updateSuplement,
  deleteSuplement,
  getOneSuplement
};
/**
 * Created by reverb6821 on 29/05/2021.
 * @description controller for the api
 */

 const Invertebrates = require('../models/invertebrates.models');
 const Utils = require('../../src/services/utils');
 
 const findAll = async (req, res) => {
   try {
     const invertebrates = await Invertebrates.findAll();
     if (invertebrates && Invertebrates.length !== 0) {
       res.status(200).json(invertebrates);
     } else {
       res.status(404).json(Utils.notFoundError);
     }
   } catch (err) {
     res.status(500).json(false);
   }
 };
 
 const findById = async (req, res) => {
   try {
     const {invertebratesId } = req.params;
     const invertebrates = await Invertebrates.findById(+invertebratesId);
     if (invertebrates) {
       res.status(200).json(invertebrates);
     } else {
       res.status(404).json(Utils.notFoundError);
     }
   } catch (err) {
     res.status(500).json(false);
   }
 };
 
 module.exports = {
   findAll,
   findById
 };
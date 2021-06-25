/**
 * Created by reverb6821 on 29/05/2021.
 * @description controller for the api
 */

 const Plants = require('../models/plants.models');
 const Utils = require('../../src/services/utils');
 
 const findAll = async (req, res) => {
   try {
     const plants = await Plants.findAll();
     if (plants && Plants.length !== 0) {
       res.status(200).json(plants);
     } else {
       res.status(404).json(Utils.notFoundError);
     }
   } catch (err) {
     res.status(500).json(false);
   }
 };
 
 const findById = async (req, res) => {
   try {
     const {plantId } = req.params;
     const plant = await Plants.findById(+plantId);
     if (plant) {
       res.status(200).json(plant);
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
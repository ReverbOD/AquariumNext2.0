/**
 * Created by reverb6821 on 29/05/2021.
 * @description controller for the api
 */

const Fishes = require('../models/fishes.models');
const Utils = require('../../src/services/utils');

const findAll = async (req, res) => {
  try {
    const fishes = await Fishes.findAll();
    if (fishes && Fishes.length !== 0) {
      res.status(200).json(fishes);
    } else {
      res.status(404).json(Utils.notFoundError);
    }
  } catch (err) {
    res.status(500).json(false);
  }
};

const findById = async (req, res) => {
  try {
    const {fishId } = req.params;
    const fish = await Fishes.findById(+fishId);
    if (fish) {
      res.status(200).json(fish);
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
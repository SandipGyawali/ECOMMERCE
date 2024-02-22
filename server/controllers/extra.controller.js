const EmailSubscribe = require('../models/subscribe.model');
const handHeldProduct = require('../models/handHeld.model');
const WearableTechProduct = require('../models/wearableTechProduct.model');
const KitchenItem = require('../models/kitchenItem.mode');
const Furniture = require('../models/furniture.model');
const Camera = require('../models/camera.model');
const _ = require('lodash');

/*
  email subscribe logic
*/
const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    // search for the existing email
    const emailExists = await EmailSubscribe.findOne({
      email: email.toLowerCase(),
    });

    if (emailExists) {
      return res.status(400).json({
        message: 'Email is already registered, try another one',
        fulfilled: false,
      });
    }

    // add new email to the database
    const emailD = new EmailSubscribe({
      email,
    });

    await emailD.save();

    res
      .status(201)
      .json({ message: 'Email added to the list', fulfilled: true });
  } catch (err) {
    res.status(500).json({
      message: 'Server error while adding to the subscribe list',
      fulfilled: false,
    });
  }
};

// home page recommendedItems list
const recommendedItems = async (req, res) => {
  try {
    // get the random items from the list and then return as a json format
    // include all the section
    // for current we get the 5 random data form the two different collection
    const [handHeldData, wearableData, kitchenData, furnitureData, cameraData] =
      await Promise.all([
        handHeldProduct.aggregate([{ $sample: { size: 2 } }]),
        WearableTechProduct.aggregate([{ $sample: { size: 2 } }]),
        KitchenItem.aggregate([{ $sample: { size: 2 } }]),
        Furniture.aggregate([{ $sample: { size: 2 } }]),
        Camera.aggregate([{ $sample: { size: 2 } }]),
      ]);

    const randomRecommendedItems = _.shuffle([
      ...handHeldData,
      ...wearableData,
      ...kitchenData,
      ...furnitureData,
      ...cameraData,
    ]);

    res.status(200).json(randomRecommendedItems);
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

// home page deal and offer api
const dealAndOffers = async (req, res) => {
  try {
    const [handHeldData, wearableData] = await Promise.all([
      handHeldProduct.aggregate([{ $sample: { size: 2 } }]),
      WearableTechProduct.aggregate([{ $sample: { size: 2 } }]),
    ]);

    const randomItems = _.shuffle([...handHeldData, ...wearableData]);

    res.status(200).json(randomItems);
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

module.exports = { subscribe, recommendedItems, dealAndOffers };

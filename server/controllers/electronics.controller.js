const handHeldProduct = require('../models/handHeld.model');
const Camera = require('../models/camera.model');
const wearableTechProduct = require('../models/wearableTechProduct.model');
const _ = require('lodash');

// enums
const cameraEnum = ['DSLR', 'mirrorless', 'compact', 'action', 'drone'];
const wearableTechProductEnum = [
  'earphone',
  'headphone',
  'airpod',
  'smartwatch',
];

// very time consuming
const electronicsSource = async (req, res) => {
  const handHeldData = await handHeldProduct.aggregate([
    { $sample: { size: 3 } },
  ]);

  // gets the camera data based on the unique enum category
  const camera = await Promise.all(
    cameraEnum.map(async (category) => {
      const sample = await Camera.aggregate([
        { $match: { productCategory: category } },
        { $sample: { size: 1 } },
      ]);
      return sample[0];
    })
  );

  // gets the wearableTech like smartwatch, earphone, headphone data based on the unique enum category
  const wearableTech = await Promise.all(
    wearableTechProductEnum.map(async (category) => {
      const sample = await wearableTechProduct.aggregate([
        { $match: { productCategory: category } },
        { $sample: { size: 1 } },
      ]);
      return sample[0];
    })
  );

  const list = _.shuffle([
    ...camera.slice(0, 2),
    ...wearableTech.slice(0, 3),
    ...handHeldData,
  ]);

  res.status(200).json(list);
};

module.exports = { electronicsSource };

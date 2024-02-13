const mongoose = require('mongoose');

// phone, tab, ipad, schema for the handheld screen touched devices
const handheldProduct = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      amount: {
        type: String,
        required: true,
      },
      currency: {
        type: String,
      },
    },
    productCategory: {
      type: String,
      required: true,
      enum: ['electronics', 'furniture', 'kitchen', 'clothing'],
    },
    productImg: {
      type: [String],
      required: true,
    },
    storage: {
      type: String,
      required: true,
    },
    productColor: {
      type: String,
      required: true,
    },
    // the below schema are fixed because we have less memory
    material: {
      type: String,
    },
    negotiable: {
      type: Boolean,
      default: true,
    },
    customization: {
      type: String,
    },
    protection: {
      type: String,
    },
    warranty: {
      type: String,
    },
    model: {
      type: String,
    },
    description: {
      type: String,
    },
    certificate: {
      type: String,
    },
    features: {
      type: String,
    },
    // we can create a reference to the seller model later as the project grows
    // for now we embed the schema
    aboutSeller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'sellerInfo',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('handHeldProduct', handheldProduct);

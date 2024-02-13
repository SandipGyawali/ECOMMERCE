const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema(
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
        required: true,
      },
    },
    productCategory: {
      type: String,
      required: true,
      enum: ['chair', 'table', 'sofa', 'bed', 'cabinet', 'shelf', 'other'],
    },
    productImg: {
      type: [String], // Array of image URLs
      required: true,
    },
    dimensions: {
      length: {
        type: Number,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
        enum: ['cm', 'in'], // Example units
      },
    },
    material: {
      type: String,
      required: true,
    },
    productColor: {
      type: String,
      required: true,
    },
    indoorOutdoor: {
      type: String,
      required: true,
      enum: ['indoor', 'outdoor'],
    },
    assemblyRequired: {
      type: Boolean,
      default: false,
    },
    weight: {
      value: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
        enum: ['kg', 'lb'], // Example units
      },
    },
    description: {
      type: String,
    },
    warranty: {
      type: String,
    },
    aboutSeller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'sellerInfo',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Furniture', furnitureSchema);

const mongoose = require('mongoose');

// Schema for wearable and portable audio and tech devices like earphones, headphones, AirPods, and smartwatches
const wearableTechProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      amount: {
        type: Number,
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
      enum: ['earphone', 'headphone', 'airpod', 'smartwatch'], // Specified categories for this schema
    },
    productImg: {
      type: [String],
      required: true,
    },
    connectivity: {
      // Specific to devices like earphones, headphones, AirPods, and smartwatches
      type: String,
      required: true,
      enum: ['wired', 'wireless', 'both'], // Includes connectivity options
    },
    productColor: {
      type: String,
      required: true,
    },
    batteryLife: {
      // Particularly relevant for wireless devices
      type: String,
    },
    waterResistant: {
      type: Boolean,
    },
    compatibility: {
      // Devices may be compatible with specific operating systems or devices
      type: String,
    },
    warranty: {
      type: String,
    },
    features: {
      type: String,
    },
    description: {
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

module.exports = mongoose.model(
  'WearableTechProduct',
  wearableTechProductSchema
);

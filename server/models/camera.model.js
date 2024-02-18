const mongoose = require('mongoose');

// Camera schema, catering specifically to photography and videography devices
const cameraProductSchema = new mongoose.Schema(
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
        required: true, // Assuming currency is required for camera products
      },
    },
    productCategory: {
      type: String,
      required: true,
      enum: ['DSLR', 'mirrorless', 'compact', 'action', 'drone'], // Specific to camera types
    },
    productImg: {
      type: [String],
      required: true,
    },
    resolution: {
      type: String,
      required: true, // Assuming resolution is a critical spec for cameras
    },
    productColor: {
      type: String,
      required: true,
    },
    // Additional camera-specific fields
    lensCompatibility: {
      type: String,
      required: true, // Assuming this is critical for cameras, especially interchangeable lens cameras
    },
    sensorType: {
      type: String,
    },
    videoResolution: {
      type: String,
      required: false, // Not all cameras are used for video
    },
    connectivity: {
      type: String,
    },
    batteryLife: {
      type: String,
    },
    weight: {
      type: String,
    },
    warranty: {
      type: String,
    },
    description: {
      type: String,
    },
    features: {
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

module.exports = mongoose.model('CameraProduct', cameraProductSchema);

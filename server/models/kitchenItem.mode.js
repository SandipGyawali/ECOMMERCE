const mongoose = require('mongoose');

// Schema for kitchen items
const kitchenItemSchema = new mongoose.Schema(
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
      enum: ['cookware', 'utensils', 'appliances'],
    },
    productImg: {
      type: [String],
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    dishwasherSafe: {
      type: Boolean,
      required: true,
    },
    productColor: {
      type: String,
      required: true,
    },
    brand: {
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
    features: {
      type: String,
    },
    // Reference to the seller model, assuming it exists
    aboutSeller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'sellerInfo',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('KitchenItem', kitchenItemSchema);

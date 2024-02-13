const mongoose = require('mongoose');

const sellerInfoSchema = new mongoose.Schema({
  sellerName: {
    type: String,
  },
  contactInfo: {
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  company: {
    type: String,
  },
  verificationStatus: {
    type: Boolean,
    default: true,
  },
  sellerDescription: {
    type: String,
  },
  country: {
    type: String,
  },
  shipping: {
    type: String,
  },
});

// we embed the above schema data into the
module.exports = mongoose.model('sellerInfo', sellerInfoSchema);

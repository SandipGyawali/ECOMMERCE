const mongoose = require('mongoose');

// const subscribe email schema
const subscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: function (v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('EmailSubscribe', subscribeSchema);

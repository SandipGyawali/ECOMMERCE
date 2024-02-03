const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'User name cannot be empty'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Valid email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: [
        6,
        'Password length is too short - should be 6 characters minimum',
      ],
      max: [12, 'Password length cannot be more than 12 character'],
    },
  },
  { timestamps: true }
);

// hashing password before saving to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  // hash password
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', userSchema);

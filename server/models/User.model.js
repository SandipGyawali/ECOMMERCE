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
      minlength: [
        6,
        'Password length is too short - should be 6 characters minimum',
      ],
      max: [12, 'Password length cannot be more than 12 character'],
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    profilePic: String,
  },
  { timestamps: true }
);

// hashing password before saving to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password') && this.password) {
    // hash password
    this.password = await bcrypt.hash(this.password, 12);
  }
  return next();
});

// google id or password one of them is must
userSchema.pre('save', function (next) {
  // check if neither password now googleId is set
  if (!this.password && !this.googleId) {
    next(new Error('A password or a Google ID must be provided'));
  } else {
    next();
  }
});

// compares the validity of the password
userSchema.methods.isValidPassword = async function (candidatePassword) {
  if (!this.password) return false; // This also covers users who signed up without a password
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);

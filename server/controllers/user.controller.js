const User = require('../models/User.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/*
  user signup
*/
const signUp = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    // search the user based on the email
    const existsUser = await User.findOne({ email: email.toLowerCase() });

    if (existsUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // create a new user instance
    const user = new User({
      username,
      email,
      password: req.body.password,
    });

    // save the user
    await user.save();

    res
      .status(201)
      .json({ message: 'user successfully created', success: true });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error creating user', error: err.message });
  }
};

/*
  user login
*/
const signIn = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (!existingUser) {
      return res.status(404).json({
        message: 'Invalid credentials',
      });
    }

    const isPasswordCorrect = await existingUser.isValidPassword(
      req.body.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: 'Invalid password',
      });
    }

    const payload = {
      id: existingUser._id,
      email: existingUser.email,
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: '6h',
    });

    //http only cookie
    res.cookie('token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 21600 * 1000,
    });

    res.status(200).json({
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

module.exports = { signIn, signUp };

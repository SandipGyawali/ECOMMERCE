const jwt = require('jsonwebtoken');

const isValidToken = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ isValid: false, message: 'No token provided' });
  }

  try {
    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // since jwt.verify throws an error for expired tokens, reaching here means token is valid.
    return res.status(200).json({ isValid: true, decodedPayload });
  } catch (err) {
    console.error('Token validation error:', err.message);
    // differentiate btwn types of jwt errors
    const status = err.name === 'TokenExpiredError' ? 401 : 400;
    return res.status(status).json({ isValid: false });
  }
};

module.exports = { isValidToken };

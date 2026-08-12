import jwt from 'jsonwebtoken';
/**
 * Generate a signed JWT for an authenticated user.
 *
 * @param {string} userId - MongoDB user ID.
 * @returns {string} Signed JWT.
 */

const generateToken = (userId) => {
  return jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

export default generateToken;

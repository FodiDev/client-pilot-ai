import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

/**
 * Protect routes
 */

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from HTTP-only cookie
  if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized. Please log in.');
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await User.findById(decoded.id);

    if (!user) {
      res.status(401);
      throw new Error('User no longer exists.');
    }

    if (!user.isActive) {
      res.status(403);
      throw new Error('Account has been deactivated.');
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401);
    throw new Error('Invalid or expired token.');
  }
});

/**
 * Role Authorization
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(403);

      throw new Error('You are not authorized to perform this action.');
    }

    next();
  };
};

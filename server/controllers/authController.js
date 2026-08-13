import asyncHandler from 'express-async-handler';
import validator from 'validator';

import User from '../models/User.js';
import sendTokenResponse from '../utils/sendTokenResponse.js';

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please provide all required fields.');
  }

  if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error('Please provide a valid email address.');
  }

  if (password.length < 8) {
    res.status(400);
    throw new Error('Password must be at least 8 characters long.');
  }

  // Check if email already exists
  const existingUser = await User.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    res.status(409);
    throw new Error('An account with this email already exists.');
  }

  // Create the user
  const user = await User.create({
    name,
    email,
    password,
  });

  // Send JWT and response
  sendTokenResponse(user, 201, res, 'Account created successfully.');
});

/**
 * @desc Login User
 * @route POST /api/auth/login
 * @access Public
 */
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate request
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide email and password.');
  }

  // Find user and include password
  const user = await User.findOne({
    email: email.toLowerCase(),
  }).select('+password');

  if (!user) {
    res.status(401);
    throw new Error('Invalid email or password.');
  }

  // Compare password
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid email or password.');
  }

  // Update last login
  user.lastLogin = new Date();

  await user.save();

  // Return token
  sendTokenResponse(user, 200, res, 'Login successful.');
});

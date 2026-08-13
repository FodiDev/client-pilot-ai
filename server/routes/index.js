import express from 'express';
import authRoutes from './authRouter.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'ClientPilot AI API is running',
  });
});

router.use('/auth', authRoutes);

export default router;

import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const userExists = await User.findOne({ email });
    
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const user = await User.create({
      name,
      email,
      password
    });
    
    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '30d' }
    );
    
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Check password
    const isMatch = await user.matchPassword(password);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '30d' }
    );
    
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      title: user.title,
      company: user.company,
      location: user.location,
      profileImage: user.profileImage,
      profileViews: user.profileViews,
      resumeViews: user.resumeViews,
      token
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Save job
router.post('/saved-jobs/:jobId', async (req, res) => {
  try {
    const { userId } = req.body;
    const { jobId } = req.params;
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Check if job is already saved
    if (user.savedJobs.includes(jobId)) {
      // Remove from saved jobs
      user.savedJobs = user.savedJobs.filter(
        (id) => id.toString() !== jobId
      );
      await user.save();
      return res.json({ message: 'Job removed from saved jobs' });
    }
    
    // Add to saved jobs
    user.savedJobs.push(jobId);
    await user.save();
    
    res.json({ message: 'Job saved successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get saved jobs
router.get('/:userId/saved-jobs', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('savedJobs');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user.savedJobs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update profile
router.put('/profile/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Update fields
    user.name = req.body.name || user.name;
    user.title = req.body.title || user.title;
    user.company = req.body.company || user.company;
    user.location = req.body.location || user.location;
    user.profileImage = req.body.profileImage || user.profileImage;
    
    const updatedUser = await user.save();
    
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      title: updatedUser.title,
      company: updatedUser.company,
      location: updatedUser.location,
      profileImage: updatedUser.profileImage
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
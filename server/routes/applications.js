import express from 'express';
import Application from '../models/Application.js';
import Job from '../models/Job.js';

const router = express.Router();

// Apply for a job
router.post('/', async (req, res) => {
  try {
    const { userId, jobId, resume, coverLetter } = req.body;
    
    // Check if already applied
    const existingApplication = await Application.findOne({
      user: userId,
      job: jobId
    });
    
    if (existingApplication) {
      return res.status(400).json({ message: 'You have already applied for this job' });
    }
    
    // Create application
    const newApplication = new Application({
      user: userId,
      job: jobId,
      resume,
      coverLetter
    });
    
    const savedApplication = await newApplication.save();
    
    // Increment applicants count
    await Job.findByIdAndUpdate(jobId, { $inc: { applicants: 1 } });
    
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get user applications
router.get('/user/:userId', async (req, res) => {
  try {
    const applications = await Application.find({ user: req.params.userId })
      .populate('job')
      .sort({ createdAt: -1 });
    
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update application status
router.put('/:id', async (req, res) => {
  try {
    const { status, notes, nextStep, nextStepDate } = req.body;
    
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    // Update fields
    application.status = status || application.status;
    application.notes = notes || application.notes;
    application.nextStep = nextStep || application.nextStep;
    application.nextStepDate = nextStepDate || application.nextStepDate;
    
    const updatedApplication = await application.save();
    
    res.json(updatedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
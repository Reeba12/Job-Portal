import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const { 
      search, 
      location, 
      jobType, 
      featured, 
      page = 1, 
      limit = 10 
    } = req.query;
    
    // Build query
    const query = {};
    
    if (search) {
      query.$text = { $search: search };
    }
    
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    
    if (jobType) {
      query.jobType = jobType;
    }
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const jobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Job.countDocuments(query);
    
    res.json({
      jobs,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      totalJobs: total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured jobs
router.get('/featured', async (req, res) => {
  try {
    const featuredJobs = await Job.find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(5);
    
    res.json(featuredJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get recommended jobs
router.get('/recommended', async (req, res) => {
  try {
    // In a real app, this would use user preferences/history
    // For now, just return some random jobs
    const recommendedJobs = await Job.aggregate([
      { $sample: { size: 5 } }
    ]);
    
    res.json(recommendedJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single job
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create job (would normally require auth)
router.post('/', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
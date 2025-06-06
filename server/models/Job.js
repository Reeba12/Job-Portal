import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  salaryMin: {
    type: Number,
    required: true
  },
  salaryMax: {
    type: Number,
    required: true
  },
  jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship'],
    required: true
  },
  applicants: {
    type: Number,
    default: 0
  },
  requirements: [{
    type: String
  }],
  responsibilities: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create text index for search
jobSchema.index({ 
  title: 'text', 
  company: 'text',
  description: 'text',
  location: 'text'
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  status: {
    type: String,
    enum: ['applied', 'interviewing', 'offered', 'rejected'],
    default: 'applied'
  },
  resume: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String
  },
  notes: {
    type: String
  },
  nextStep: {
    type: String
  },
  nextStepDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ensure one application per user per job
applicationSchema.index({ user: 1, job: 1 }, { unique: true });

const Application = mongoose.model('Application', applicationSchema);

export default Application;
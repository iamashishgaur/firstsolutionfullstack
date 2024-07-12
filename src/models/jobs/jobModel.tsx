import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    name: String,
    logoUrl: String,
    website: String,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract", "Temporary", "Internship"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String], // Array of strings
  },
  requirements: {
    type: [String], // Array of strings
  },
  salaryRange: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      require:true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
  applicationDeadline: {
    type: Date,
  },
  experienceLevel: {
    type: String,
    enum: ["Junior", "Mid", "Senior"],
    required: true,
  },
  skills: {
    type: [String], // Array of strings
  },
  industry: {
    type: String,
    required: true,
  },
  benefits: {
    type: [String], // Array of strings
  },
  contactEmail: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "is invalid"], // Email validation
  },
  status: {
    type: String,
    enum: ["Active", "Closed"],
    default: "Active",
  }
})

const JobModel = mongoose.models.jobs || mongoose.model("jobs", JobSchema);

export default JobModel;
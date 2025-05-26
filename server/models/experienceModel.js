import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, default: "" },
    isCurrent: { type: Boolean, default: false },
    responsibilities: { type: [String], required: true },
})

const ExperienceModel = mongoose.model('experience', experienceSchema);

export default ExperienceModel;
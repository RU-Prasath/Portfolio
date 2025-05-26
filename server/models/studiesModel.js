import mongoose from 'mongoose';

const studySchema = new mongoose.Schema({
    grade: { type: String, required: true },
    institution: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date, default: '' },
    isCurrent: { type: Boolean, default: false },
    specialization: { type: String, default: ''},
})

const StudyModel = mongoose.model('Studies', studySchema);

export default StudyModel;
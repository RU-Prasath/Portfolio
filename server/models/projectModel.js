import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: [String], required: true },
    link: { type: String, default: null },
    technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill'}]
})

const ProjectModel = mongoose.model('projects', projectSchema);

export default ProjectModel;
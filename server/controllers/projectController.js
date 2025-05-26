import ProjectModel from "../models/projectModel.js";

export const addProject = async (req, res) => {
    try {
        const { name, img, description, link, technologies } = req.body;

        const newProject = new ProjectModel({ name, img, description, link, technologies });

        await newProject.save();
        res.status(201).json({ success: true, message: 'Successfully created project.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add project.' });
    }
};

export const getProject = async (req, res) => {
    try {
        const project = await ProjectModel.find({});
        res.status(200).json({ success: true, message: 'Successfullt fetched projects.', data: project });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch project.' });
    }
};

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedProject = await ProjectModel.findByIdAndUpdate(id, updates, { new: true });

        if(!updatedProject) {
            return res.status(404).json({ success: false, message: 'Project not found.' });
        }

        res.json({ success: true, data: updatedProject });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update project.' });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProject = await ProjectModel.findByIdAndDelete(id);

        if (!deletedProject) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        res.json({ success: true, message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete project.' });
    }
};
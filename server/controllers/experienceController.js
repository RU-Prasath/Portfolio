import ExperienceModel from "../models/experienceModel.js";

export const addExperience = async (req, res) => {
    try {
        const { company, position, startDate, endDate, isCurrent, responsibilities } = req.body;

        const experience = new ExperienceModel({ company, position, startDate, endDate, isCurrent, responsibilities })
        await experience.save()
        
        res.status(201).json({ success: true, message: 'Experience added successfully'})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add experience.', error: error.message})
    }
};

export const getExperience = async (req, res) => {
    try {
        const experience = await ExperienceModel.find({});
        if(!experience) {
            res.status(404).json({ success: false, message: 'Experience not found.' });
        }
        res.status(200).json({ success: true, message: 'Experience fetched successfully.', data: experience });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to get experience.'})
    }
};

export const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = req.body;
        
        const updateExp = await ExperienceModel.findByIdAndUpdate( id, experience );
        
        if(!updateExp) {
            res.status(404).json({ success: true, message: 'Experience not found.' });
        }
        
        res.status(204).json({ success: true, message: 'Experience updated successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update experience.'})
    }
};

export const deleteExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = await ExperienceModel.findByIdAndDelete( id );
        if(!experience) {
            res.status(404).json({ success: true, message: 'Experience not found.' });
        }
        
        res.status(204).json({ success: true, message: 'Experience updated successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete experience.'})
    }
};
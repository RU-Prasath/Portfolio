import StudyModel from "../models/studiesModel.js";

export const addStudy = async (req, res) => {
    try {
        const { grade, institution, from , to, specialization } = req.body;

        const add = new StudyModel({ grade, institution, from, to, specialization });
        await add.save();

        res.status(201).json({ success: true, message: 'Created study detail.', data: add });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add studies.', error: error.message });
    }
};

export const getStudy = async (req, res) => {
    try {
        const data = await StudyModel.find({})

        if(!data) {
            return res.json({ message: 'Studies not found.' });
        }

        res.status(200).json({ success: true, message: 'Fetched study details.', data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to get studies.', error: error.message });
    }
};

export const updateStudy = async (req, res) => {
    try {
        const { id } = req.params;

        const data = req.body;

        const existing = await StudyModel.findByIdAndUpdate(id, data, { new: true });

        if(!existing) {
            return res.json({ message: 'Studies not found.' });
        }

        res.status(204).json({ success: true, message: 'Updated study details.', data: existing });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update studies.', error: error.message });
    }
};

export const deleteStudy = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudy = await StudyModel.findByIdAndDelete(id);
        
        if(!deletedStudy) {
            return res.status(404).json({ success: false, message: 'studies not found.' })
        }
        res.status(204).json({ success: true, message: 'Deleted study details.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete studies.', error: error.message });
    }
};
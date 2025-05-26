import CertificateModel from "../models/certificateModel.js";

export const addCertificate = async (req, res) => {
    try {
        const { title, institution, numberId, image } = req.body;

        const add = new CertificateModel({ title, institution,numberId, image });
        await add.save();

        res.status(201).json({ success: true, message: 'Created certificate.', data: add });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add certificate.', error: error.message });
    }
};

export const getCertificate = async (req, res) => {
    try {
        const data = await CertificateModel.find({})

        if(!data) {
            return res.json({ message: 'Certificate not found.' });
        }

        res.status(200).json({ success: true, message: 'Fetched certificate details.', data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to get certificate.', error: error.message });
    }
};

export const updateCertificate = async (req, res) => {
    try {
        const { id } = req.params;

        const data = req.body;

        const existing = await CertificateModel.findByIdAndUpdate(id, data, { new: true });

        if(!existing) {
            return res.json({ message: 'Certificate not found.' });
        }

        res.status(204).json({ success: true, message: 'Updated certificate details.', data: existing });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update certificate.', error: error.message });
    }
};

export const deleteCertificate = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudy = await CertificateModel.findByIdAndDelete(id);
        
        if(!deletedStudy) {
            return res.status(404).json({ success: false, message: 'certificate not found.' })
        }
        res.status(204).json({ success: true, message: 'Deleted certificate details.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete certificate.', error: error.message });
    }
};
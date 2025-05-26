import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    institution: { type: String, required: true },
    numberId: { type: String, default: ''},
    image: { type: String, required: true }
})

const CertificateModel = mongoose.model('Certificates', certificateSchema);

export default CertificateModel;
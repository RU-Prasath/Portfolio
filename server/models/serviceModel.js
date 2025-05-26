import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    type: { type: String, required: true},
    desc: { type: String, required: true},
})

const ServiceModel = mongoose.model('services', serviceSchema);

export default ServiceModel;
import ServiceModel from "../models/serviceModel.js";

export const addService = async (req, res) => {
    try {
        const { type, desc } = req.body;

        const service = new ServiceModel({ type, desc });
        await service.save()

        res.status(201).json({ success: true, message: 'Serivce added successfully.'})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add service', error: error.message })
    }
};

export const getService = async (req, res) => {
    try {
        const services = await ServiceModel.find({});
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch service', error: error.message })
    }
};

export const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = req.body;

        const update = await ServiceModel.findByIdAndUpdate( id, service, { new: true } );

        if (!update) {
            res.status(404).json({ success: false, message: 'Service not found.' })
        }
        
        res.status(204).json({ success: true, message: 'Service updated successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update service', error: error.message })
    }
};

export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const service = await ServiceModel.findByIdAndDelete( id );
        
        if(!service) {
            return res.status(404).json({ success: false, message: 'Service not found.' })
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete service', error: error.message })
    }
}
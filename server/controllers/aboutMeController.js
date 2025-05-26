import aboutModel from "../models/aboutMeModel.js";

export const aboutPost = async (req, res) => {
    try {
        const { paraOne, paraTwo } = req.body;

        const existing = await aboutModel.findOne();
        if (existing) {
            return res.status(400).json({success: false, message: 'Already posted once.'});
        }

        const about = new aboutModel({ paraOne, paraTwo });
        await about.save();
        
        return res.status(201).json({success: true, message: 'About Me added successfully.'})
    } catch (error) {
        return res.status(500).json({success: false, message: 'About Me Not added successfully', error: error})
    }
};

export const aboutGet = async (req, res) => {
    try {
        const aboutCon = await aboutModel.find({})
        res.status(200).json({success: true, data: aboutCon})
    } catch (error) {
        res.status(500).json({success: false, message: "About content not fetched successfully."})
    }
}

export const aboutUpdate = async (req, res) => {
    try {
        const { paraOne, paraTwo } = req.body;

        const para = await aboutModel.findOne();
        if(!para) {
            return res.status(404).json({success: false, message: 'About Me content not found.'});
        }

        para.paraOne = paraOne;
        para.paraTwo = paraTwo;

        await para.save();

        res.status(200).json({success: true, message: 'Updated about me successfully.', data: para})
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to update About Me.', error: error})
    }
}

export const aboutDelete = async (req, res) => {
    try {
        const para = await aboutModel.findOne()
        if(!para) {
            res.status(404).json({success: false, message: 'About Me content not found.'});
        }
        
        para.paraTwo = '';
        await para.save()
        res.status(200).json({success: true, message: 'Deleted second para in about section'});
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to delete About Me.'})
    }
}
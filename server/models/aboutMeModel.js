import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    paraOne: {type: String, required: true},
    paraTwo: {type: String, default: ''}
})

const aboutModel = mongoose.model("AboutMe", aboutSchema);
export default aboutModel;
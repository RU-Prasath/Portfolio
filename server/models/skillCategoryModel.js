import mongoose from 'mongoose';

const skillCategorySchema = new mongoose.Schema({
  title: { type: String, required: true }
});

const SkillCategory = mongoose.model('SkillCategory', skillCategorySchema);
export default SkillCategory;

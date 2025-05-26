import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  expFrom: { type: Number, required: true },
  expTo: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'SkillCategory', required: true }
});

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;

import SkillCategory from '../models/skillCategoryModel.js';
import Skill from '../models/skillsModel.js';

export const addSkillCat = async (req, res) => {
  try {
    const { title } = req.body;
    const newCategory = new SkillCategory({ title });
    await newCategory.save();
    res.status(201).json({ success: true, message: 'Skill category added.', data: newCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding skill category.', error: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await SkillCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCat = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updated = await SkillCategory.findByIdAndUpdate(id, { title }, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Category not found." });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await SkillCategory.findById(id);
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    await Skill.deleteMany({ category: id });

    await SkillCategory.findByIdAndDelete(id);

    res.json({ success: true, message: "Category and related skills deleted." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const addSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, img, expFrom, expTo } = req.body;
    const category = await SkillCategory.findById(id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const newSkill = new Skill({ name, img, expFrom, expTo, category: id });
    await newSkill.save();

    res.status(201).json({ success: true, data: newSkill });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const addSkill = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, expFrom, expTo } = req.body;
//     const category = await SkillCategory.findById(id);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const img = req.file ? `/images/${req.file.filename}` : null;

//     if (!img) return res.status(400).json({ message: "Image is required" });

//     const newSkill = new Skill({ name, img, expFrom, expTo, category: id });
//     await newSkill.save();

//     res.status(201).json({ success: true, data: newSkill });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const getAllSkills = async (req, res) => {
  try {
    const { categoryId } = req.query;
    const query = categoryId ? { category: categoryId } : {};
    const skills = await Skill.find(query).populate('category');
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Skill.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Skill not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// import fs from 'fs';
// import path from 'path';

// export const updateSkill = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Use multer to access uploaded file
//     const { name, expFrom, expTo } = req.body;
//     const img = req.file ? req.file.filename : null;

//     const skill = await Skill.findById(id);
//     if (!skill) return res.status(404).json({ message: "Skill not found" });

//     // Optionally delete old image if new one uploaded
//     if (img && skill.img) {
//       const oldImagePath = path.join("public/images/", skill.img);
//       fs.existsSync(oldImagePath) && fs.unlinkSync(oldImagePath);
//     }

//     const updated = await Skill.findByIdAndUpdate(
//       id,
//       {
//         name,
//         expFrom,
//         expTo,
//         ...(img && { img }),
//       },
//       { new: true }
//     );

//     res.json({ success: true, message: "Skill updated", data: updated });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await Skill.findByIdAndDelete(id);
    res.json({ success: true, message: "Skill deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

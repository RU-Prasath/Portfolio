import express from 'express';
import {
  addSkillCat,
  getAllCategories,
  updateCat,
  deleteCat,
  addSkill,
  getAllSkills,
  updateSkill,
  deleteSkill
} from '../controllers/skillsController.js';
// import upload from '../middlewares/upload.js';

const router = express.Router();

// Category routes
router.post('/category/add', addSkillCat);
router.get('/category/get', getAllCategories);
router.put('/category/:id', updateCat);
router.delete('/category/:id', deleteCat);

// Skill routes
router.post('/add/:id', addSkill);
// router.post('/add/:id', upload.single("img"), addSkill);
router.get('/get', getAllSkills);
router.put('/:id', updateSkill);
// router.put('/:id', upload.single('img'), updateSkill);
router.delete('/:id', deleteSkill);

export default router;

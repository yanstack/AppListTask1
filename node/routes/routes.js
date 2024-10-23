import express from "express";
import BlogModel from "../models/BlogModel.js";
import {
  createBlog,
  deleteBlog,
  getAllRegisters,
  getBlog,
  updateBlog,
} from "../controllers/BlogController.js";
import { blogs } from "../database/data.js";
const router = express.Router();

router.post("/seed", async (req, res) => {
  try {
    await BlogModel.truncate();
    await BlogModel.bulkCreate(blogs);
    res.json({ message: "Blogs created successfully" });
  } catch (error) {
    res.json({ message: error });
  }
});

//Ruta traer todos los registros
router.get("/", getAllRegisters);
//Ruta traer 1 registro
router.get("/:id", getBlog);
//Ruta crear registro
router.post("/", createBlog);
//Ruta actualizar registro
router.put("/:id", updateBlog);
//Ruta borrar registro
router.delete("/:id", deleteBlog);

export default router;

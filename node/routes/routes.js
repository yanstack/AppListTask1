import express from 'express';
import { createBlog, deleteBlog, getAllRegisters, getBlog, updateBlog } from '../controllers/BlogController.js';
const router = express.Router();


//Ruta traer todos los registros
router.get("/", getAllRegisters);
//Ruta traer 1 registro
router.get('/:id', getBlog);
//Ruta crear registro
router.post("/", createBlog);
//Ruta actualizar registro
router.put("/:id", updateBlog);
//Ruta borrar registro
router.delete("/:id", deleteBlog);


export default router;
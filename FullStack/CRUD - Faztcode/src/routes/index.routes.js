import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  updateTask,
  deleteTask,
  toggleDone,
} from "../controllers/task.controller";
const router = Router();

// Inicio
router.get("/", renderTasks);

// Guardar tarea
router.post("/tasks/add", createTask);

// Toggle Done
router.get("/toggleDone/:id", toggleDone);

// Editar tarea - mostrarla con metodo GET
router.get("/edit/:id", renderTaskEdit);

// Actualizar tarea
router.post("/edit/:id", updateTask);

// Eliminar tarea
router.get("/delete/:id", deleteTask);

export default router;

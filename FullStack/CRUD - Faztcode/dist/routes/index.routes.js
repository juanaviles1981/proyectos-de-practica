"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task.controller");
var router = (0, _express.Router)();

// Inicio
router.get("/", _task.renderTasks);

// Guardar tarea
router.post("/tasks/add", _task.createTask);

// Toggle Done
router.get("/toggleDone/:id", _task.toggleDone);

// Editar tarea - mostrarla con metodo GET
router.get("/edit/:id", _task.renderTaskEdit);

// Actualizar tarea
router.post("/edit/:id", _task.updateTask);

// Eliminar tarea
router.get("/delete/:id", _task.deleteTask);
var _default = exports["default"] = router;
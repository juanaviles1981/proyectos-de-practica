const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const XLSX = require('xlsx');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/taskdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

const TaskSchema = new mongoose.Schema({
    date: Date,
    task: String,
    status: String
});

const Task = mongoose.model('Task', TaskSchema);

// Función para ajustar la zona horaria
function adjustDateForTimezone(date) {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
}

app.post('/api/tasks', async (req, res) => {
    try {
        const { date, task, status } = req.body;
        const adjustedDate = adjustDateForTimezone(new Date(date));
        const newTask = new Task({ date: adjustedDate, task, status });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.patch('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/api/export', async (req, res) => {
    try {
        const tasks = await Task.find();
        
        // Formatear los datos para el excel
        const formattedTasks = tasks.map(task => ({
            Fecha: adjustDateForTimezone(new Date(task.date)).toLocaleDateString('es-ES'),
            Tarea: task.task,
            Estado: task.status
        }));

        // Crear un nuevo libro de trabajo
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(formattedTasks);

        // Añadir la hoja al libro
        XLSX.utils.book_append_sheet(workbook, worksheet, "Tareas");

        // Generar el archivo buffer
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

        // Configurar la respuesta
        res.setHeader('Content-Disposition', 'attachment; filename=tareas.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        
        // Enviar el archivo
        res.send(excelBuffer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
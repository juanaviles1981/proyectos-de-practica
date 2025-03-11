import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean(); //Para uqe devuelva un objeto de JS
    // console.log(tasks)
  
    res.render("index", { tasks: tasks }); //Arreglo de objetos de mongo, no es un obj de JS
}  

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch {
    console.log(error.message);
  }
}

export const updateTask = async (req, res) => {
  const { id } = req.params;
    
await Task.findByIdAndUpdate(id, req.body);
res.redirect("/");

}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  }


export const toggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
  
}


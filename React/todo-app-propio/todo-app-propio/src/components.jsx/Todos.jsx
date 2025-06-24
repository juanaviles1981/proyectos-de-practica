import { useState } from "react";
import "./Todos.css"

const Todos = () => {

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    const handleInput = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const handleAddTodo = () =>{


        if(input.trim() !== ""){
            setTodos([...todos, {text: input, completed: false}])
            setInput ("")
        }

    }

    return (
        <div className="todo-frame">
            <div className="todo-header">
                <h1>Todo App - Juan Aviles</h1>
            </div>
            
            <div className="todo-new">
                <input type="text" onChange={handleInput} placeholder="Nueva tarea" value={input}/>
            </div>
            <button onClick={handleAddTodo}>Agregar</button>

            <div className="todo-list">
                <ul>
                   {todos.map((todo, index) => {
                    return(
                        <li key={index}> 
                        {todo.text}
                    </li> 
                    )
                    
                }
                
                )}
                </ul>
            </div>
        </div>
    )
}

export default Todos;

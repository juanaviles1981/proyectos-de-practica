import { useState } from "react";

const FormAddMoney = ( {setCount }) =>{
    
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    
    const handleForm = e => {
        e.preventDefault();
        
        if(input === "" || Number(input)<0) {
            setError(true)
            return
        }

        setError(false)
        setCount(Number(input))
    
    }

    return(
        <div className="form-add-money">
            <form onSubmit={ handleForm }>
                <p>Agregar presupuesto</p>
                <input type="number" placeholder="$300" onChange={e => setInput(e.target.value)}/>
                <input type="submit" value="Agregar" />
            </form>
            {error ? <p className="error">Presupuesto inválido</p> : null }
            
        </div>
    )
}

export default FormAddMoney;
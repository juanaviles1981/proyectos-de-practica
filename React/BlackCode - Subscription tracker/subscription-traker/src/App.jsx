import { useState } from 'react'
import './App.css'
import FormAddMoney from './componentes/FormAddMoney'
import Header from './componentes/Header'
import MainControl from './componentes/MainControl'

function App() {
  const [count, setCount] = useState(0)
  const [isValid, setIsValid] = useState(false)
  
  const component = isvalid ? 
  return (
    <div className='App'>
      <Header />
      <FormAddMoney setCount={setCount} setIsValid={setIsValid}/>    
      <MainControl count={count}/>

    </div>
    
  )
}

export default App

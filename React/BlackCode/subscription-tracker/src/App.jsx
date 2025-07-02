import { useState } from 'react'
import './App.css'
import FormAddMoney from './componentes/FormAddMoney'
import Header from './componentes/Header'
import MainControl from './componentes/MainControl'

function App() {
  const [count, setCount] = useState(0)
  // const [isValid, setIsValid] = useState(false)
  
<<<<<<< HEAD:React/BlackCode - Subscription tracker/subscription-traker/src/App.jsx
  const component = isValid 
                    ? <MainControl count={count} />
                    : <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  return (
    <div className='App'>
      <Header />
      {component} 
=======
  // const component = isvalid ? 
  return (
    <div className='App'>
      <Header />
      <FormAddMoney setCount={setCount}/>    
      <MainControl count={count}/>

>>>>>>> 7bd3e32d3dd0919e716c2f61a8dd11fec2c5d68c:React/BlackCode/subscription-tracker/src/App.jsx
    </div>
    
  )
}

export default App

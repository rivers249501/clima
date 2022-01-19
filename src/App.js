import RequestApi from './components/RequestApi'
import { useState } from 'react'
import './styles.css'

function App() { 
  
  const [ setIsTrue] = useState(true)
  
  setTimeout(() => {
    setIsTrue(false)
  }, 2000)
  
  
  return (
    <div className="app">           
    <RequestApi /> 
      
    </div>
  )
}

export default App


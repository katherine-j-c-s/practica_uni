import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Ejercicios from './Components/Ejercicios'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ejercicio/:id' element={<Ejercicios></Ejercicios>} ></Route>
      </Routes>
    </>
  )
}

export default App

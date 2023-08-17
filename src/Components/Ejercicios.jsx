import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Ejercicio1 from './Results/Ejercicio1'

export default function Ejercicios() {
  const [ejercicio,setEjercicio] = useState()
  const param = useParams()

  useEffect(()=>{
    let id = Number(param.id)
    setEjercicio(id)
  },[])
  return (
    <div className='text-black'>
        {ejercicio === 1 ? <Ejercicio1></Ejercicio1> : null}
    </div>
  )
}

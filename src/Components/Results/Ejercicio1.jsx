import React from 'react'
import {ejercicios} from '../../../ejercicios'

export default function Ejercicio1() {
  return (
    <div>
        {console.log(ejercicios)}
        <h1>{ejercicios[0].consigna}</h1>
        {ejercicios[0].ejercicios.map((e,i)=>{
            return(
                <div className='my-10'>
                    <div className='flex'>
                        <p>{e.id}</p>
                        <p>{e.tema}</p>
                    </div>
                    <div>
                        <p>pasos:</p>
                    </div>
                    {console.log(i)}
                </div>
            )
        })}
    </div>
  )
}

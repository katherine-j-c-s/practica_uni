import React, { useState } from 'react'
import {ejercicios} from '../../../ejercicios'

export default function Ejercicio1() {
    const [info,setInfo] = useState({
            primero: [],
            segundo: 0,
            tercero: [],
        }
    )
    const handleChange = (event) => {
        console.log(info);
        if (event.target.name === "primero") {
            setInfo({
                ...info,
                [event.target.name]: [...info.primero ,event.target.value ]
            })
        }else if (event.target.name === "tercero") {
            setInfo({
                ...info,
                [event.target.name]: [...info.tercero ,event.target.value ]
            })
        }else{
            setInfo({
                ...info,
                [event.target.name]: event.target.vaue 
            })
        }
        
        console.log(info);
    }
  return (
    <div>
        {console.log(ejercicios)}
        <h1>{ejercicios[0].consigna}</h1>
        {ejercicios[0].ejercicios.map((e,i)=>{
            let numEjer = null
            if (i === 0) {
                numEjer = "primero"
            }else if (i === 1) {
                numEjer = "segundo"
            }else if (i === 2) {
                numEjer = "tercero"
            }
            console.log(numEjer);
            return(
                <div key={i} className='my-10'>
                    <div className='flex'>
                        <p>{e.id}</p>
                        <p>{e.tema}</p>
                    </div>
                    <div>
                        <p>pasos:</p>
                        {Array(e.entrada).fill().map((_,i)=>{
                            return(
                                <div key={i}>
                                    <p>entrada:</p>
                                    {console.log()}
                                    <input 
                                        type="text" 
                                        name={numEjer}
                                        placeholder={e.ingresa[i]} 
                                        value={typeof info[numEjer] === "object" ? info[numEjer][i] : info[numEjer]}
                                        onChange={handleChange}
                                    />
                                    {++i !== e.entrada ?
                                        <button>next</button>
                                    : null}
                                </div>
                            )
                        })}
                        <button>resolver</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

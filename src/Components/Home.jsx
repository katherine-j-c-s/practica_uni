import React from 'react'
import {ejercicios} from '../../ejercicios'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
        <h1 className='text-black font-mono'>hola mundo</h1>
        {ejercicios.map((e,i)=>(
            <Link key={i} to={`/ejercicio/${++i}`}>
                <div>
                    <p>ejercicio {i} </p>
                </div>
            </Link>
        ))}
    </div>
  )
}

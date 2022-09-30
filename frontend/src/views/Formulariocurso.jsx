import axios from 'axios'
import React from 'react'
import { useState } from 'react'



const Formulariocurso =  () => {
   
   const [curso, setCurso] =  useState({nombre: ""})
   console.log(curso)
   
  const enviar = async () =>{
    await axios.post('http://localhost:4000/cursos', curso)
    .then((response) => {console.log(response.data)})
  }
  
   

  

  return (
    <div className='card '>
        <div className='card-header'>
            <h4>Agregar</h4>
        </div>
        <form >
            <div className='form-group '>
                <input  name= "nombre"  type="text" placeholder='Nombre' className='form-control'
                onChange={(e) => setCurso({...curso, nombre: e.target.value}) }/>
            </div>
            <button 
            onClick={(e) => enviar(e)}
            type='submit' className='btn -btn-outline-success bg-success btn-sm btn-block'>Agregar</button>
        </form>
    </div>
  )
}

export default Formulariocurso

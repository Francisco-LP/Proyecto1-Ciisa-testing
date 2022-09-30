import React from 'react'
import { useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [apellidop, setApellido] = useState('')
    const [lista, setLista] = useState([])

    const agregarUsuario = (e) => {
        e.preventDefault()
        const usuario = {
            nombre,
            apellidop
        }
        setLista([...lista, usuario])
        console.log(lista)
        setNombre('')
        setApellido('')
        
    }

  return (
    <div className='card '>
        <div className='card-header'>
            <h4>Agregar</h4>
        </div>
        <form action=''>
            <div className='form-group '>
                <input 
                onChange={(e) =>{setNombre(e.target.value)}}
                name= "nombre" type="text" placeholder='Nombre' className='form-control'
                value={nombre}/>
            </div>
            <div className='form-group'>
                <input 
                onChange={(e) => {setApellido(e.target.value)}}
                name="apellido" type="text" placeholder='apellidos' className='form-control'
                value={apellidop}/>
            </div>
            <button 
            onClick={(e) => agregarUsuario(e)} 
            type='submit' className='btn -btn-outline-success bg-success btn-sm btn-block'>Agregar</button>
        </form>
    </div>
  )
}

export default Formulario
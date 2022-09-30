import React from 'react'

export default function Notas (nombre){
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Profesor:</div>
          {nombre}           
        </div>
        <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary mx-1 btn-sm">Editar</button>
            <button className="btn btn-outline-danger  mx-1 btn-sm">Borrar</button>
        </div>
        
    </li>
  )
}


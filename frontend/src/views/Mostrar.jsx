import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { todosCursos } from '../funciones/funciones';
import { todosAlumnos } from '../funciones/funciones';


const Mostrar = () => {

    const params = useParams()

    useEffect(() => {
        todosCursos(params._id)
    },[])

    useEffect(() => {
        todosAlumnos(params._id)
    },[])

  return (
    <div>Mostrar pag{params._id}</div>
  )
}

export default Mostrar
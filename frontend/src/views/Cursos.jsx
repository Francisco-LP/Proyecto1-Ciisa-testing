import React, {Fragment, useState ,useEffect } from 'react'
import {  todosCursos } from '../funciones/funciones';
import Listgroup from '../components/ListGroup';
import Formulariocurso from './Formulariocurso';


const Cursos = () => {

  const [curso, setCurso] = useState(null);

  useEffect(() => {
    todosCursos(setCurso);
  },[]);



  return (
    <Fragment>
      <div className="content mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Formulariocurso />
          </div>
          <div className="col-sm-12 col-md-4">
            <Listgroup>
              <div>
                {curso != null
                  ? curso.map((curso) => (
                      <div key={curso._id}>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">curso:</div>
                            {curso.nombre}
                          </div>
                          <div className="d-flex justify-content-between">
                            <button className="btn btn-outline-primary mx-1 btn-sm">
                              Editar
                            </button>
                            <button className="btn btn-outline-danger  mx-1 btn-sm">
                              Borrar
                            </button>
                          </div>
                        </li>
                      </div>
                    ))
                  : "no hay cursosores"}
              </div>
            </Listgroup>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cursos
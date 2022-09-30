import React, { Fragment, useState, useEffect } from "react";
import { todosAlumnos } from "../funciones/funciones";
import Formulario from "./Formulario";
import Listgroup from "../components/ListGroup";

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState(null);

  useEffect(() => {
    todosAlumnos(setAlumnos);
    console.log(alumnos);
  }, []);

  


  return (
    <Fragment>
      <div className="content mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Formulario />
          </div>
          <div className="col-sm-12 col-md-4">
            <Listgroup>
              <div>
                {alumnos != null
                  ? alumnos.map((alumno) => (
                      <div key={alumno._id}>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">alumnos:</div>
                            {alumno.nombre} {alumno.apellidop} {alumno.apellodom}
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
                  : "no hay alumnossores"}
              </div>
            </Listgroup>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Alumnos;

/*

{alumnos != null ? (
          alumnos.map(alumnos => (
            <div key={alumnos._id}>
              <a href={`/mostar/${alumnos._id}`}>{alumnos.nombre}</a>
            </div>
          ))
        ) : ('no hay Alumnos')}
*/

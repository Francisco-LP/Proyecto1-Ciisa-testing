import React, { Fragment, useState, useEffect } from "react";
import Listgroup from "../components/ListGroup";

import { todosProfesores } from "../funciones/funciones";
import Formulario from "./Formulario";

const Profes = () => {
  /*
  const [profe, setProfesores] = useState(null)
    const getProfe = async () => {
    const res = await fetch('http://localhost:4000/profesores')
    const result = await res.json()
    setProfesores(result)
    console.log(result)
    }
    useEffect(() => {
        getProfe()
    },[])
    */

  const [profe, setProfe] = useState(null);

  useEffect(() => {
    todosProfesores(setProfe);
    console.log(profe);
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
                {profe != null
                  ? profe.map((profe) => (
                      <div key={profe._id}>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Profesor:</div>
                            {profe.nombre}  {profe.apellidop}  {profe.apellidom}
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
                  : "no hay profesores"}
              </div>
            </Listgroup>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profes;

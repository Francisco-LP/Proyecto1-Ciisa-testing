import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cursos from "./views/Cursos";
import Profesores from "./views/Profesores";
import Alumnos from "./views/Alumnos";
import Inicio from "./views/Inicio";
import Mostrar from "./views/Mostrar";
import NoEncontrada from "./views/NoEncontrada";


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}>
        <Route index element={<Inicio />}/>
        <Route path="Cursos" element={<Cursos />}/>
        <Route path="Profesores" element={<Profesores />}/>
        <Route path="Alumnos" element={<Alumnos />}/>
        <Route path="Mostrar" element={<Mostrar />}/>
        
      </Route>
    </Routes>  
  </BrowserRouter>
  
);

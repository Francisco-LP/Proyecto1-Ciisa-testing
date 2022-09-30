import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-success'>
      <h4 className='navbar-brand  mx-4'>Sistema de control de notas</h4>
        <div className='container d-inline justify-content-center'>
            <Link className='btn btn-link" mx-3' to='/'>Inicio</Link>
            <NavLink className='btn btn-link" mx-3' to='/Cursos'>Cursos</NavLink>
            <NavLink className='btn btn-link" mx-3' to='/Profesores'>Profesores</NavLink>
            <NavLink className='btn btn-link" mx-3' to='/Alumnos'>Alumnos</NavLink>
        </div>
        
    </nav>
  )
}

export default Navbar

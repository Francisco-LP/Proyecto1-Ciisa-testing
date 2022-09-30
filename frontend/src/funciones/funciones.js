import axios from 'axios';


// curso 
//get
const todosCursos = async (state) => {
    const peticion = await axios.get('http://localhost:4000/cursos')
    state(peticion.data);
};

//post


export {
    todosCursos
    
}





// Alumnos

const todosAlumnos = async (state) => {
    const peticion = await axios.get('http://localhost:4000/alumnos')
    state(peticion.data);
    console.log(peticion.data);
};

export{
    todosAlumnos
}


// Profesores

const todosProfesores = async (state) => {
    const peticion = await axios.get('http://localhost:4000/profesores')
    state(peticion.data);
    console.log()
};
/*
export default function Profes() {

    const [profe, setProfesores] = useState([])
    const getProfe = async () => {
    const res = await fetch('http://localhost:4000/profesores')
    const result = await res.json()
    console.log(result)
    }
    useEffect(() => {
        getProfe()
    },[])

};

*/


export{
    todosProfesores
}


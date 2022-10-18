import {useState} from 'react'
//import { setTodTareas, todTareas,  setClave, clave } from '../../../todo/src/ToDo/ToDo'

const useForm = (json) => {
  const [form, setForm]= useState(json)
  
  const [todTareas, setTodTareas] = useState([])

  // console.log('Agregar Tarea: ', agregarTarea)
  const [clave, setClave] = useState(0)

  
    const handleCheckbox = (e) => {
        // e.preventDefault();
        const {id, checked} = e.target
        console.log('id', id)
        console.log('checked', checked)
        modTarea(id, checked)
        
    }

    const handleBorrar = (clave) => {
        // e.preventDefault();
        console.log('clave', clave)
        borrarTarea(clave)
        
    }

const agregarTarea = (estado, tarea, descripcion) => {
    setClave(prev => prev + 1)

    setTodTareas([...todTareas,  {
     clave: clave,
     estado: estado,
     tarea: tarea,
     descripcion: descripcion
    }])     


}
const modTarea =  (clave) => {
    console.log('modTarea:clave', clave)
    let auxTareas = todTareas.slice()
    const index = todTareas.findIndex(tarea => parseInt(tarea.clave) === parseInt(clave));
    console.log('modTarea:index', index)
    console.log('modTarea:auxTareas', auxTareas)
    auxTareas[index].estado = !auxTareas[index].estado
    setTodTareas(auxTareas)
    console.log('AuxTareas', auxTareas)
}

const borrarTarea =  (indice) => {
    const newTarea = todTareas.filter((item) => item.clave !== indice);
    setTodTareas(newTarea);
    console.log('Borrar Tarea newTarea', newTarea)
}

    
const handleChange = (e) => {
    console.log(e.target)
    const {name, value} = e.target

    setForm(
        {...form,
        [name]: value
    });
}   

const handleSubmit = (e, form) => {
    e.preventDefault();
    agregarTarea(false, form.tarea, form.descripcion )   ;

}

return {form, handleChange, handleSubmit, borrarTarea, modTarea, todTareas, handleCheckbox, handleBorrar}

}

export default  useForm
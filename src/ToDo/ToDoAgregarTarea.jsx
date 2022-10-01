import React, {useState} from 'react'

const ToDoAgregarTarea = ({agregarTarea}) => {
    // console.log('Agregar Tarea: ', agregarTarea)
    const [form, setForm]= useState({
        estado: false,
        tarea: '',
        descripcion: ''
    })
    
const handleChange = (e) => {
    const {name, value} = e.target

    setForm(
        {...form,
        [name]: value
    });
    
}


const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(false, form.tarea, form.descripcion )        
}
    
  return (
    <form onSubmit={handleSubmit}>
    <div>
        <input type="text" name="tarea"  onChange={handleChange}/>
        <input type="text" name="descripcion"  onChange={handleChange}/>
        <button type="submit">Agregar</button>
    </div>
    </form>
  )
}




export default ToDoAgregarTarea
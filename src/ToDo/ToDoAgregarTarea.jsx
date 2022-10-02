import React, {useState} from 'react'
import './ToDoAgregarTarea.modules.css'

const ToDoAgregarTarea = ({agregarTarea}) => {
    // console.log('Agregar Tarea: ', agregarTarea)

    // console.log(styles["tarea"])

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
    agregarTarea(false, form.tarea, form.descripcion )   ;
    e.target.reset()
}
    
  return (
    <form id="formulario" className="box" onSubmit={handleSubmit}>
    <div>
        <h3>Nueva tarea</h3>
        <input className="texto" type="text" name="tarea" placeholder='Tarea' onChange={handleChange} required/>
        <input className="texto" type="text" name="descripcion" placeholder='Descripción' onChange={handleChange} required/>
        <button className="btn" type="submit">Agregar</button>
        <h6 className="tarea">* Completa los campos para agregar una nueva tarea</h6>
    </div>
    </form>
  )
}




export default ToDoAgregarTarea
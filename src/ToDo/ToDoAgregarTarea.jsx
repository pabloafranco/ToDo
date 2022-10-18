import React, {useState} from 'react'
import useForm from '../hooks/useForm'
import './ToDoAgregarTarea.modules.css'

const ToDoAgregarTarea = ({agregarTarea}) => {
    // console.log('Agregar Tarea: ', agregarTarea)
  const {Form, handleChange, handleSubmit} = useForm
    
  return (
    <form id="formulario" className="box" onSubmit={()=>handleSubmit()}>
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
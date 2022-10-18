import React  from 'react'
import ToDoMostrarTarea from './ToDoMostrarTarea'
import { FaTasks} from "react-icons/fa";
import './ToDo.modules.css'

import './ToDoAgregarTarea.modules.css'
import useForm from '../hooks/useForm';
import { todoForm } from './helpers/TodoForms';


const ToDo = () => {

  const {form, handleChange, handleSubmit, borrarTarea, modTarea, todTareas} = useForm(todoForm)
  

  return (
    <form id="form" className="box" onSubmit={(e) => {
      handleSubmit(e, form);
    }}>
    <div>
        <h3>Nueva tarea</h3>
        <input className="texto" type="text" value={form.tarea}  name="tarea" placeholder='Tarea' onChange={handleChange} required/>
        <input className="texto" type="text"  value={form.descripcion} name="descripcion" placeholder='Descripción' onChange={handleChange} required/>
        <button className="btn" type="submit">Agregar</button>
        <h6 className="tarea">* Completa los campos para agregar una nueva tarea</h6>
    </div>
 
    <div className = "box">
        <h1>ToDo List App  <FaTasks /></h1>
        <ToDoMostrarTarea todTareas={todTareas} handleCheckbox={modTarea} handleBorrar={borrarTarea} />

    </div>
    </form>


)

}

 

export default ToDo
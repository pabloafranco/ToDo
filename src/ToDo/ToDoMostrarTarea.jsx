import React from 'react'
import { FcFullTrash } from "react-icons/fc";
import './ToDoMostrarTarea.css'

const ToDoMostrarTarea = (props) => {
  
    const {todTareas, modTarea, borrarTarea} =  props
    
    const handleCheckbox = (e) => {
        // e.preventDefault();
        const {id, checked} = e.target
        console.log('checked', checked)
        modTarea(id, checked)
        
    }

    const handleBorrar = (clave) => {
        // e.preventDefault();
        console.log('clave', clave)
        borrarTarea(clave)
        
    }

  return (
    <section>
        { 
        <ul>
            <h2>Lista de Tareas</h2>
             { todTareas.map((unaTarea, index)=> (
                <li key={unaTarea.clave}>
                    <input
                    checked={unaTarea.estado}
                    id={unaTarea.clave}
                    onChange={handleCheckbox}
                    type="checkbox"
                    />
                    <span className={`${unaTarea.estado ? "tachado" : ""}`}>{unaTarea.tarea}</span>
                    <span className={`${unaTarea.estado ? "tachado" : ""}`}>{unaTarea.descripcion}</span>
                    <button onClick={() => handleBorrar(unaTarea.clave)}><FcFullTrash /></button>
                </li>
                )
            )
        }
        </ul>
    }
    </section>
  )
}

export default ToDoMostrarTarea

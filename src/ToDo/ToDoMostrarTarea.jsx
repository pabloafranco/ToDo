                                                                                                                                                                                                                                                      import React from 'react'
import { FcFullTrash } from "react-icons/fc";
import './ToDoMostrarTarea.css'

const ToDoMostrarTarea = (props) => {
  
    const {todTareas, modTarea, borrarTarea} =  props
    
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

  return (
    <section>
        { 
        <ul>
            <h2>Lista de Tareas  </h2>
             { todTareas.map((unaTarea, index)=> (
                <li key={unaTarea.clave}>
                    <input className="tabla__checkbox"
                    checked={unaTarea.estado}
                    id={unaTarea.clave}
                    onChange={handleCheckbox}
                    type="checkbox"
                    />
                    <span>{unaTarea.tarea}</span>
                    <span>{unaTarea.descripcion}</span>
                    <button onClick={() => handleBorrar(unaTarea.clave)}><FcFullTrash /></button>
                </li>
                )
            )
        }
        </ul>
        /* className={`${unaTarea.estado ? "tachado" : ""}`}  */
    }
    </section>
  )
}

export default ToDoMostrarTarea

                                                                                                                                                                                                                                                      import React from 'react'
import { FcFullTrash } from "react-icons/fc";
import useForm from '../hooks/useForm';
import './ToDoMostrarTarea.css'

const ToDoMostrarTarea = (props) => {
  
  const {todTareas, handleCheckbox, handleBorrar} = props

  console.log('mostrarTareas: ', todTareas)
  if (todTareas === undefined) {
    return
  }


  return (
    <section>
        { 
        <ul>
            <h2>Lista de Tareas  </h2>
             { todTareas.map((unaTarea, index)=> (
                <li key={unaTarea.clave}>
                    <input className="tabla__checkbox"
                    onChange={() => handleCheckbox(unaTarea.clave)}
                    checked={unaTarea.estado}
                    id={unaTarea.clave}
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

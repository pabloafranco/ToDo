import React, { useState } from 'react'
import ToDoAgregarTarea from './ToDoAgregarTarea'
import ToDoMostrarTarea from './ToDoMostrarTarea'
import { FaTasks} from "react-icons/fa";
import './ToDo.modules.css'

const ToDo = () => {
  const [todTareas, setTodTareas] = useState([])
  const [clave, setClave] = useState(0)


  const modTarea =  (clave, estado) => {
    console.log('modTarea:clave', clave)
    console.log('modTarea:estado', estado)
    let auxTareas = todTareas.slice()
    const index = todTareas.findIndex(tarea => parseInt(tarea.clave) === parseInt(clave));
    console.log('modTarea:index', index)
    console.log('modTarea:auxTareas', auxTareas)
    auxTareas[index].estado = estado
    setTodTareas(auxTareas)
    console.log('AuxTareas', auxTareas)
}

const borrarTarea =  (indice) => {
    const newTarea = todTareas.filter((item) => item.clave !== indice);
    setTodTareas(newTarea);
    console.log('Borrar Tarea newTarea', newTarea)
}

  const agregarTarea = (estado, tarea, descripcion) => {
    setClave(prev => prev + 1)

    let auxTareas = todTareas.slice()
    auxTareas.push({
        clave: clave,
        estado: estado,
        tarea: tarea,
        descripcion: descripcion
    })
    setTodTareas(auxTareas)
    console.log(auxTareas)
}
 

 
  return (
    <div className = "box">
        <h1>ToDo List App  <FaTasks /></h1>
        <ToDoAgregarTarea agregarTarea={agregarTarea} />
        <ToDoMostrarTarea todTareas={todTareas} modTarea={modTarea} borrarTarea={borrarTarea} />

    </div>
  )
}

export default ToDo
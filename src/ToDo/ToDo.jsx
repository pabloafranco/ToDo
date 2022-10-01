import React, { useState } from 'react'
import ToDoAgregarTarea from './ToDoAgregarTarea'
import ToDoMostrarTarea from './ToDoMostrarTarea'

const ToDo = () => {
  const [todTareas, setTodTareas] = useState([])
  const [clave, setClave] = useState(0)


  const modTarea =  (indice, estado) => {
    let auxTareas = todTareas.slice()
    auxTareas[indice].estado = estado
    setTodTareas(auxTareas)
    console.log('AuxTareas', auxTareas)
}

const borrarTarea =  (indice) => {
    const newTarea = todTareas.filter((item) => item.clave !== indice);

    setTodTareas(newTarea);
    
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
    <div>
        <h1>ToDo List App </h1>
        <ToDoAgregarTarea agregarTarea={agregarTarea} />
        <ToDoMostrarTarea todTareas={todTareas} modTarea={modTarea} borrarTarea={borrarTarea} />

    </div>
  )
}

export default ToDo
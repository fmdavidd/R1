import React, { useState } from "react";
import "./App.css";

import perfilImagen from "./assets/images/perfil.jpg";

// 1. Hola Mundo
const HolaMundo = () => {
  return <h1 className="hola-mundo">Hola, mundo!</h1>;
};

// 2. Tarjeta de presentación
const TarjetaPresentacion = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt="Foto de perfil" />
      <h2>{nombre} {apellido}</h2>
      <p>{profesion}</p>
    </div>
  );
};

// 3. Contador
const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador">
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
};

// 4. Lista de tareas
const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea) {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea("");
    }
  };

  const marcarCompletada = (indice) => {
    const tareasActualizadas = tareas.map((tarea, i) =>
      i === indice ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (indice) => {
    const tareasActualizadas = tareas.filter((_, i) => i !== indice);
    setTareas(tareasActualizadas);
  };

  return (
    <div className="lista-tareas">
      <h2>Lista de tareas</h2>
      <input
        type="text"
        placeholder="Agregar tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice} style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
            {tarea.texto}
            <button onClick={() => marcarCompletada(indice)}>
              {tarea.completada ? "Desmarcar" : "Completar"}
            </button>
            <button onClick={() => eliminarTarea(indice)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 5. Formulario simple
const FormularioUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    setMensaje(`¡Bienvenido, ${nombre}!`);
  };

  return (
    <div className="formulario">
      <h2>Formulario de usuario</h2>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

// Componente principal
function App() {
  return (
    <div className="App">
      <HolaMundo />
      <TarjetaPresentacion
        nombre="John"
        apellido="Doe"
        profesion="Desarrollador Web"
        imagen={perfilImagen} // Usamos la imagen local
      />
      <Contador />
      <ListaTareas />
      <FormularioUsuario />
    </div>
  );
}

export default App;

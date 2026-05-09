import React, { useState } from 'react';

const EstadoList = ({ estados, setEstados }) => {
  const [nuevoEstado, setNuevoEstado] = useState('');

  const agregarEstado = () => {
    const trimEstado = nuevoEstado.trim();
    if (trimEstado === '') return;
    if (estados.includes(trimEstado)) {
      alert('El estado ya existe');
      return;
    }
    setEstados([...estados, trimEstado]);
    setNuevoEstado('');
  };

  const eliminarEstado = (index) => {
    const nuevosEstados = estados.filter((_, i) => i !== index);
    setEstados(nuevosEstados);
  };

  return (
    <div className='estado-list'>
      <h3>Gestión de Estados</h3>
      <div style={{ marginBottom: '10px' }}>
        <input 
          type='text' 
          value={nuevoEstado} 
          onChange={(e) => setNuevoEstado(e.target.value)} 
          placeholder='Nombre del estado' 
        />
        <button onClick={agregarEstado}>Agregar</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {estados.map((estado, index) => (
          <li key={index} style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
            {estado}
            <button onClick={() => eliminarEstado(index)} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EstadoList;

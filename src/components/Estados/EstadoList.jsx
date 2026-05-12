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
    <div className="estado-list-container">
      <div className="add-estado-form">
        <input
          type="text"
          className="estado-input"
          value={nuevoEstado}
          onChange={(e) => setNuevoEstado(e.target.value)}
          placeholder="Ej: Soleado, Lluvia..."
        />
        <button className="add-button" onClick={agregarEstado}>Agregar</button>
      </div>
      
      <div className="estados-grid-display">
        {estados.map((estado, index) => (
          <div key={index} className="estado-item-card">
            <span className="estado-name">{estado}</span>
            <button 
              className="delete-button" 
              onClick={() => eliminarEstado(index)}
              aria-label={`Eliminar estado ${estado}`}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      
      {estados.length === 0 && (
        <p style={{ color: "var(--text-muted)", textAlign: "center", marginTop: "20px" }}>
          No hay estados definidos aún.
        </p>
      )}
    </div>
  );
};

export default EstadoList;

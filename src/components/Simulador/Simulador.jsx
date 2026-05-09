import React, { useState } from 'react';

const Simulador = ({ estados, matriz }) => {
  const [pasos, setPasos] = useState(10);
  const [secuencia, setSecuencia] = useState([]);
  const [error, setError] = useState('');

  const validarMatriz = () => {
    if (matriz.length === 0) return false;
    for (let i = 0; i < matriz.length; i++) {
      const suma = matriz[i].reduce((acc, val) => acc + val, 0);
      if (Math.abs(suma - 1) > 0.01) return false;
    }
    return true;
  };

  const simular = () => {
    if (estados.length === 0) {
      setError('No hay estados definidos.');
      return;
    }
    if (!validarMatriz()) {
      setError('La matriz no es válida. Todas las filas deben sumar 1.');
      return;
    }
    setError('');

    let estadoActualIdx = Math.floor(Math.random() * estados.length);
    const nuevaSecuencia = [estados[estadoActualIdx]];

    for (let p = 0; p < pasos; p++) {
      const probabilidades = matriz[estadoActualIdx];
      const randomNum = Math.random();
      let acumulado = 0;
      let siguienteIdx = probabilidades.length - 1;

      for (let j = 0; j < probabilidades.length; j++) {
        acumulado += probabilidades[j];
        if (randomNum <= acumulado) {
          siguienteIdx = j;
          break;
        }
      }

      nuevaSecuencia.push(estados[siguienteIdx]);
      estadoActualIdx = siguienteIdx;
    }

    setSecuencia(nuevaSecuencia);
  };

  return (
    <div className='simulador-container'>
      <h3>Simulador de Cadena de Markov</h3>
      <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label>Número de pasos: </label>
        <input 
          type='number' 
          value={pasos} 
          onChange={(e) => setPasos(parseInt(e.target.value) || 0)} 
          min='1' 
          max='100'
          style={{ width: '80px' }}
        />
        <button onClick={simular}>Ejecutar Simulación</button>
      </div>

      {error && <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>{error}</p>}

      {secuencia.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4>Resultado de la Secuencia:</h4>
          <div className='resultado-box'>
            {secuencia.join(' → ')}
          </div>
          <p style={{ fontSize: '0.9em', marginTop: '10px', color: '#7f8c8d' }}>
            <strong>Total de transiciones:</strong> {secuencia.length - 1}
          </p>
        </div>
      )}
    </div>
  );
};

export default Simulador;

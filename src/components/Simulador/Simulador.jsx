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
    <div className="simulador-container section-card">
      <h3 className="feature-title" style={{ color: "var(--secondary)" }}>Simulador de Motor</h3>
      
      <div className="simulation-controls">
        <div className="input-group">
          <label htmlFor="pasos">Pasos a simular:</label>
          <input
            id="pasos"
            type="number"
            value={pasos}
            onChange={(e) => setPasos(parseInt(e.target.value) || 0)}
            min="1"
            max="100"
            className="prob-input"
            style={{ width: "100px !important" }}
          />
        </div>
        <button className="cta-button" onClick={simular} style={{ minWidth: "200px", padding: "12px" }}>
          Ejecutar Simulación
        </button>
      </div>

      {error && (
        <div className="error-message" style={{ marginTop: "20px" }}>
          <span className="error-icon">❌</span>
          {error}
        </div>
      )}

      {secuencia.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h4 style={{ color: "var(--highlight)", marginBottom: "15px" }}>Secuencia Resultante:</h4>
          <div className="resultado-box">
            {secuencia.map((s, i) => (
              <React.Fragment key={i}>
                <span className="sec-state">{s}</span>
                {i < secuencia.length - 1 && <span className="sec-arrow"> → </span>}
              </React.Fragment>
            ))}
          </div>
          <p className="note-text" style={{ marginTop: "15px" }}>
            <strong>Total de transiciones:</strong> {secuencia.length - 1}
          </p>
        </div>
      )}
    </div>
  );
};

export default Simulador;

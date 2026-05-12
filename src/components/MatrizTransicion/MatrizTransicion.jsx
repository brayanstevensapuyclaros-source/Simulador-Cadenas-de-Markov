import React from 'react';

const MatrizTransicion = ({ estados, matriz, setMatriz }) => {
  const handleInputChange = (rowIndex, colIndex, value) => {
    // Permitir valores vacíos o decimales incompletos durante la edición
    if (value === '') {
      const nuevaMatriz = [...matriz];
      nuevaMatriz[rowIndex] = [...nuevaMatriz[rowIndex]];
      nuevaMatriz[rowIndex][colIndex] = 0;
      setMatriz(nuevaMatriz);
      return;
    }

    const numValue = parseFloat(value);
    const nuevaMatriz = [...matriz];
    nuevaMatriz[rowIndex] = [...nuevaMatriz[rowIndex]];
    nuevaMatriz[rowIndex][colIndex] = isNaN(numValue) ? 0 : numValue;
    setMatriz(nuevaMatriz);
  };

  const validarFila = (rowIndex) => {
    if (!matriz[rowIndex]) return false;
    const suma = matriz[rowIndex].reduce((acc, val) => acc + val, 0);
    return Math.abs(suma - 1) < 0.0001;
  };

  return (
    <div className="matriz-container section-card">
      <h3 className="feature-title" style={{ color: "var(--secondary)" }}>Matriz de Transición</h3>
      <p className="note-text" style={{ marginBottom: "20px" }}>
        Define las probabilidades de moverte de un estado a otro. 
        <span style={{ color: "var(--highlight)", marginLeft: "5px" }}>Cada fila debe sumar 1.</span>
      </p>
      
      <div style={{ overflowX: "auto", paddingBottom: "10px" }}>
        <table className="transition-table">
          <thead>
            <tr>
              <th className="corner-header">De \ A</th>
              {estados.map((estado, i) => (
                <th key={i}>{estado}</th>
              ))}
              <th className="sum-header">Suma</th>
            </tr>
          </thead>
          <tbody>
            {matriz.map((row, i) => {
              const suma = row.reduce((acc, val) => acc + val, 0);
              const esValida = validarFila(i);
              return (
                <tr key={i} className={esValida ? "row-valid" : "row-invalid"}>
                  <td className="row-header">{estados[i]}</td>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="1"
                        value={cell === 0 ? "" : cell}
                        placeholder="0"
                        onChange={(e) => handleInputChange(i, j, e.target.value)}
                        className={`prob-input ${cell < 0 || cell > 1 ? "input-error" : ""}`}
                      />
                    </td>
                  ))}
                  <td className={`sum-cell ${esValida ? "text-success" : "text-danger"}`}>
                    {suma.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {matriz.some((_, i) => !validarFila(i)) && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          Asegúrate de que todas las filas sumen exactamente 1.00
        </div>
      )}
    </div>
  );
};

export default MatrizTransicion;

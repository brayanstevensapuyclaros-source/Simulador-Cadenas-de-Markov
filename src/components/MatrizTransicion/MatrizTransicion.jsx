import React from 'react';

const MatrizTransicion = ({ estados, matriz, setMatriz }) => {
  const handleInputChange = (rowIndex, colIndex, value) => {
    const numValue = parseFloat(value);
    const nuevaMatriz = [...matriz];
    nuevaMatriz[rowIndex] = [...nuevaMatriz[rowIndex]];
    nuevaMatriz[rowIndex][colIndex] = isNaN(numValue) ? 0 : numValue;
    setMatriz(nuevaMatriz);
  };

  const validarFila = (rowIndex) => {
    const suma = matriz[rowIndex].reduce((acc, val) => acc + val, 0);
    return Math.abs(suma - 1) < 0.0001;
  };

  return (
    <div className='matriz-container'>
      <h3>Matriz de Transición</h3>
      <p style={{ fontSize: '0.8em', color: '#666' }}>Cada fila debe sumar 1.</p>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th></th>
            {estados.map((estado, i) => (
              <th key={i} style={{ padding: '5px' }}>{estado}</th>
            ))}
            <th style={{ padding: '5px', fontSize: '0.8em' }}>Suma</th>
          </tr>
        </thead>
        <tbody>
          {matriz.map((row, i) => {
            const suma = row.reduce((acc, val) => acc + val, 0);
            const esValida = validarFila(i);
            return (
              <tr key={i}>
                <td style={{ fontWeight: 'bold', padding: '5px' }}>{estados[i]}</td>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: '5px' }}>
                    <input
                      type='number'
                      step='0.1'
                      min='0'
                      max='1'
                      value={cell}
                      onChange={(e) => handleInputChange(i, j, e.target.value)}
                      style={{ width: '50px', border: cell < 0 || cell > 1 ? '2px solid red' : '1px solid #ccc' }}
                    />
                  </td>
                ))}
                <td style={{ 
                  padding: '5px', 
                  color: esValida ? 'green' : 'red',
                  fontWeight: 'bold'
                }}>
                  {suma.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {matriz.some((_, i) => !validarFila(i)) && (
        <p style={{ color: 'red', marginTop: '10px' }}>Error: Alguna fila no suma 1.</p>
      )}
    </div>
  );
};

export default MatrizTransicion;

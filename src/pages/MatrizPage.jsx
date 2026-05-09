import React from 'react';
import MatrizTransicion from '../components/MatrizTransicion/MatrizTransicion';

const MatrizPage = ({ estados, matriz, setMatriz }) => {
  return (
    <div className='section-card'>
      <h2>Matriz de Transición</h2>
      <p>Ingrese las probabilidades de transición entre los estados definidos.</p>
      <MatrizTransicion estados={estados} matriz={matriz} setMatriz={setMatriz} />
    </div>
  );
};

export default MatrizPage;

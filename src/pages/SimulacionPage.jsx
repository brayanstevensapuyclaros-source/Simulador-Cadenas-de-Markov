import React from 'react';
import Simulador from '../components/Simulador/Simulador';

const SimulacionPage = ({ estados, matriz }) => {
  return (
    <div className='section-card'>
      <h2>Simulación de la Cadena</h2>
      <p>Ejecute simulaciones estocásticas basadas en los estados y probabilidades definidos.</p>
      <Simulador estados={estados} matriz={matriz} />
    </div>
  );
};

export default SimulacionPage;

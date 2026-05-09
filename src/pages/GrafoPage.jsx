import React from 'react';
import GrafoVisual from '../components/GrafoVisual/GrafoVisual';

const GrafoPage = ({ estados, matriz }) => {
  return (
    <div className='section-card'>
      <h2>Visualización del Grafo</h2>
      <p>Representación visual de la cadena de Markov y sus probabilidades.</p>
      <GrafoVisual estados={estados} matriz={matriz} />
    </div>
  );
};

export default GrafoPage;

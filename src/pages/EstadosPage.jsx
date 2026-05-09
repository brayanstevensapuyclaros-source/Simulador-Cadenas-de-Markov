import React from 'react';
import EstadoList from '../components/Estados/EstadoList';

const EstadosPage = ({ estados, setEstados }) => {
  return (
    <div className='section-card'>
      <h2>Gestión de Estados</h2>
      <p>Defina los estados de su cadena de Markov aquí.</p>
      <EstadoList estados={estados} setEstados={setEstados} />
    </div>
  );
};

export default EstadosPage;

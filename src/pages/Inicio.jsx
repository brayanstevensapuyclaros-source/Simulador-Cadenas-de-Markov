import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className='hero-section' style={{ paddingBottom: '60px' }}>
      <div className='section-card' style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Simulador de Cadenas de Markov </h2>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-main)', maxWidth: '800px', margin: '0 auto' }}>
          Explora el mundo de la probabilidad estocástica con nuestra herramienta de simulación avanzada.
        </p>
      </div>

      <div className='features-grid'>
        
        <div className='section-card feature-item'>
          <h3 style={{ color: 'var(--secondary)', borderBottom: '1px solid var(--secondary)', marginBottom: '20px' }}>¿Qué es una Cadena de Markov?</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
            Es un modelo matemático que describe una secuencia de posibles eventos en los que la probabilidad de cada evento depende solo del estado alcanzado en el evento anterior. 
            Es la base de sistemas de predicción modernos y algoritmos de IA.
          </p>
        </div>

        <div className='section-card feature-item'>
          <h3 style={{ color: 'var(--accent)', borderBottom: '1px solid var(--accent)', marginBottom: '20px' }}>Casos de Uso Reales</h3>
          <ul style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '2.2', paddingLeft: '20px' }}>
            <li><strong>Meteorología:</strong> Predicción de climas.</li>
            <li><strong>Finanzas:</strong> Comportamiento de mercados.</li>
            <li><strong>Biología:</strong> Modelado de secuencias de ADN.</li>
            <li><strong>Internet:</strong> Algoritmo PageRank de Google.</li>
          </ul>
        </div>

        <div className='section-card feature-item'>
          <h3 style={{ color: 'var(--highlight)', borderBottom: '1px solid var(--highlight)', marginBottom: '20px' }}>Guía de Uso Rápido</h3>
          <ol style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '2', paddingLeft: '20px' }}>
            <li><strong>Estados:</strong> Define tus variables.</li>
            <li><strong>Matriz:</strong> Asigna probabilidades.</li>
            <li><strong>Grafo:</strong> Visualiza la red.</li>
            <li><strong>Simulación:</strong> Ejecuta el motor.</li>
          </ol>
        </div>

      </div>

      <div style={{ marginTop: '80px', marginBottom: '80px' }}>
        <button 
          style={{ padding: '25px 80px', fontSize: '1.5rem', borderRadius: '25px' }} 
          onClick={() => navigate('/estados')}
        >
          ¡EMPEZAR SIMULACIÓN!
        </button>
      </div>

      <div className='section-card' style={{ marginTop: '60px', background: 'rgba(0,0,0,0.4)', padding: '30px' }}>
        <h4 style={{ color: 'var(--secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>Nota Teórica</h4>
        <p style={{ fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          "El futuro es independiente del pasado dado el presente." - Propiedad de Markov.
        </p>
      </div>
    </div>
  );
};

export default Inicio;

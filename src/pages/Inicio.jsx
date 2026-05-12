import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section" style={{ paddingBottom: "40px" }}>
      <div className="section-card" style={{ marginBottom: "30px" }}>
        <h2 className="responsive-h2">
          Simulador de Cadenas de Markov
        </h2>
        <p className="hero-description">
          Explora el mundo de la probabilidad estocástica con nuestra herramienta de simulación avanzada.
        </p>
      </div>

      <div className="features-grid">
        <div className="section-card feature-item">
          <h3 className="feature-title" style={{ color: "var(--secondary)", borderBottom: "1px solid var(--secondary)" }}>
            ¿Qué es una Cadena de Markov?
          </h3>
          <p className="feature-text">
            Es un modelo matemático que describe una secuencia de posibles eventos en los que la probabilidad de cada evento depende solo del estado alcanzado en el evento anterior.
            Es la base de sistemas de predicción modernos y algoritmos de IA.
          </p>
        </div>

        <div className="section-card feature-item">
          <h3 className="feature-title" style={{ color: "var(--accent)", borderBottom: "1px solid var(--accent)" }}>
            Casos de Uso Reales
          </h3>
          <ul className="feature-list">
            <li><strong>Meteorología:</strong> Predicción de climas.</li>
            <li><strong>Finanzas:</strong> Comportamiento de mercados.</li>
            <li><strong>Biología:</strong> Modelado de secuencias de ADN.</li>
            <li><strong>Internet:</strong> Algoritmo PageRank de Google.</li>
          </ul>
        </div>

        <div className="section-card feature-item">
          <h3 className="feature-title" style={{ color: "var(--highlight)", borderBottom: "1px solid var(--highlight)" }}>
            Guía de Uso Rápido
          </h3>
          <ol className="feature-list">
            <li><strong>Estados:</strong> Define tus variables.</li>
            <li><strong>Matriz:</strong> Asigna probabilidades.</li>
            <li><strong>Grafo:</strong> Visualiza la red.</li>
            <li><strong>Simulación:</strong> Ejecuta el motor.</li>
          </ol>
        </div>
      </div>

      <div className="cta-container">
        <button className="cta-button" onClick={() => navigate("/estados")}>
          ¡EMPEZAR SIMULACIÓN!
        </button>
      </div>

      <div className="section-card note-card">
        <h4 className="note-title">Nota Teórica</h4>
        <p className="note-text">
          "El futuro es independiente del pasado dado el presente." - Propiedad de Markov.
        </p>
      </div>
    </div>
  );
};

export default Inicio;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      marginTop: '60px',
      padding: '30px 20px',
      borderTop: 'var(--border)',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.9rem',
      background: 'rgba(15, 23, 42, 0.5)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px 20px 0 0'
    }}>
      <div style={{ marginBottom: '10px' }}>
        © {currentYear} <strong>Simulador de Cadenas de Markov</strong>. Todos los derechos reservados.
      </div>
      <div style={{ 
        fontSize: '0.8rem', 
        letterSpacing: '0.1em', 
        textTransform: 'uppercase',
        color: 'var(--secondary)'
      }}>
        Desarrollado con el ❤️ por Brayan Steven Sapuy Claros
      </div>
      <div style={{ marginTop: '15px', fontSize: '0.75rem', opacity: 0.6 }}>
        Herramienta Educativa de Análisis Probabilístico Estocástico
      </div>
    </footer>
  );
};

export default Footer;

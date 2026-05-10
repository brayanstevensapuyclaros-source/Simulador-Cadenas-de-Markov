import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import EstadosPage from './pages/EstadosPage';
import MatrizPage from './pages/MatrizPage';
import GrafoPage from './pages/GrafoPage';
import SimulacionPage from './pages/SimulacionPage';
import './styles/App.css';

function App() {
  // Cargar estados desde localStorage o usar por defecto
  const [estados, setEstados] = useState(() => {
    const saved = localStorage.getItem('markov_estados');
    return saved ? JSON.parse(saved) : ['Sol', 'Lluvia'];
  });

  // Cargar matriz desde localStorage o inicializar vacía
  const [matriz, setMatriz] = useState(() => {
    const saved = localStorage.getItem('markov_matriz');
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar estados en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('markov_estados', JSON.stringify(estados));
  }, [estados]);

  // Guardar matriz en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('markov_matriz', JSON.stringify(matriz));
  }, [matriz]);

  // Sincronizar matriz con estados
  useEffect(() => {
    const n = estados.length;
    setMatriz(prevMatriz => {
      const nuevaMatriz = Array(n).fill(0).map((_, i) => {
        return Array(n).fill(0).map((_, j) => {
          if (prevMatriz[i] && prevMatriz[i][j] !== undefined) {
            return prevMatriz[i][j];
          }
          return 0;
        });
      });
      return nuevaMatriz;
    });
  }, [estados]);

  return (
    <Router>
      <div className='App' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: '1' }}>
          <header className='main-header'>
            <h1>Simulador de Cadenas de Markov</h1>
          </header>
          <Navbar />

          <div className='container-pages'>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/estados' element={<EstadosPage estados={estados} setEstados={setEstados} />} />
              <Route path='/matriz' element={<MatrizPage estados={estados} matriz={matriz} setMatriz={setMatriz} />} />
              <Route path='/grafo' element={<GrafoPage estados={estados} matriz={matriz} />} />
              <Route path='/simulacion' element={<SimulacionPage estados={estados} matriz={matriz} />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

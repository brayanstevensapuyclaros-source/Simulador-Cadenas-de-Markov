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
  const [estados, setEstados] = useState(['Sol', 'Lluvia']);
  const [matriz, setMatriz] = useState([]);

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

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={isOpen ? 'nav-open' : ''}>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink>
        <NavLink to='/estados' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Estados</NavLink>
        <NavLink to='/matriz' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Matriz</NavLink>
        <NavLink to='/grafo' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Grafo</NavLink>
        <NavLink to='/simulacion' onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Simulación</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink>
      <NavLink to='/estados' className={({ isActive }) => isActive ? 'active' : ''}>Estados</NavLink>
      <NavLink to='/matriz' className={({ isActive }) => isActive ? 'active' : ''}>Matriz</NavLink>
      <NavLink to='/grafo' className={({ isActive }) => isActive ? 'active' : ''}>Grafo</NavLink>
      <NavLink to='/simulacion' className={({ isActive }) => isActive ? 'active' : ''}>Simulación</NavLink>
    </nav>
  );
};

export default Navbar;

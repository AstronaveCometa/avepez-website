import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="menu-navegacion-avepez">
      <Link to="/" className="marca-menu-avepez">AVEPEZ</Link>
      <ul className="lista-enlaces-avepez">
        <li><Link to="/" className="enlace-menu-avepez">Inicio</Link></li>
        <li><Link to="/obra" className="enlace-menu-avepez">La Obra</Link></li>
        <li><Link to="/zapatito" className="enlace-menu-avepez">Zapatito Cochinito</Link></li>
        <li><Link to="/elenco" className="enlace-menu-avepez">Elenco & Equipo</Link></li>
        <li><Link to="/requerimientos" className="enlace-menu-avepez">Requerimientos</Link></li>
        <li><Link to="/muestra" className="enlace-menu-avepez">Muestra audiovisual</Link></li>
        <li><Link to="/contacto" className="enlace-menu-avepez">Contacto</Link></li>
      </ul>
    </nav>
  );
}
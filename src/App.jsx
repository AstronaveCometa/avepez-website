import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importación de páginas individuales
import Home from './pages/Home';
import Obra from './pages/Obra';
import Zapatito from './pages/Zapatito';
import Elenco from './pages/Elenco';
import Requerimientos from './pages/Requerimientos';
import Muestra from './pages/Muestra';
import Contacto from './pages/Contacto';

import './styles/index.css';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Menú de navegación siempre visible */}
        <Navbar />
        
        {/* Rutas de navegación del sitio */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/obra" element={<Obra />} />
            <Route path="/zapatito" element={<Zapatito />} />
            <Route path="/elenco" element={<Elenco />} />
            <Route path="/requerimientos" element={<Requerimientos />} />
            <Route path="/muestra" element={<Muestra />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        
        {/* Footer persistente */}
        <Footer />
      </div>
    </Router>
  );
}
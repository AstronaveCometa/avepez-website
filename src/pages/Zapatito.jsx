import React from 'react';

export default function Zapatito() {
  return (
    <div className="contenedor-avepez pagina-transicion-suave" style={{ textAlign: 'center' }}>
      <h2 className="titulo-seccion-avepez">Zapatito Cochinito</h2>
      <p className="texto-zapatito-cochinito">
        Conoce más acerca de nuestras producciones musicales y trayectoria infantil visitando nuestro sitio web oficial.
      </p>
      <div style={{ marginBottom: '30px' }}>
        <a href="https://www.zapatitocochinito.cl" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://res.cloudinary.com/dorfpavlv/image/upload/v1783947525/IMG_8885_gfxl0m.jpg" 
            alt="Grupo Zapatito Cochinito" 
            className="imagen-responsiva-avepez"
            style={{ maxWidth: '600px', cursor: 'pointer', transition: 'transform 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </a>
      </div>
      <p>
        <a 
          href="https://www.zapatitocochinito.cl" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'var(--color-acento-ave)', fontWeight: 'bold', textDecoration: 'underline' }}
        >
          Visitar www.zapatitocochinito.cl
        </a>
      </p>
    </div>
  );
}
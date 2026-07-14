import React from 'react';

export default function Home() {
  return (
    <div className="contenedor-avepez pagina-transicion-suave">
      <h1 style={{ textAlign: 'center', marginBottom: '25px', color: 'var(--color-oceano-principal)' }}>
        Bienvenido al Cuento Sinfónico
      </h1>
      <img 
        src="https://res.cloudinary.com/dorfpavlv/image/upload/v1783947772/Avepez_Home_qvfbqg.jpg" 
        alt="Portada Oficial de Avepez" 
        className="imagen-responsiva-avepez"
      />
    </div>
  );
}
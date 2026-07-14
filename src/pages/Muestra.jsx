import React from 'react';

export default function Muestra() {
  return (
    <div className="contenedor-avepez pagina-transicion-suave">
      <h2 className="titulo-seccion-avepez">Muestra de la Obra</h2>
      
      <h3 style={{ marginBottom: '15px', color: 'var(--color-bosque-secundario)' }}>Muestra Audiovisual</h3>
      <div className="cuadrícula-videos-avepez">
        <div className="contenedor-video-avepez">
          <iframe 
            src="https://www.youtube.com/embed/Y4Nj2z23cbY" 
            title="Avepez Video Promocional 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="contenedor-video-avepez">
          <iframe 
            src="https://www.youtube.com/embed/uBiJzMkrd1c" 
            title="Avepez Video Promocional 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
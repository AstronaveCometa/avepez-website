import React from 'react';

export default function Obra() {
  return (
    <div className="contenedor-avepez pagina-transicion-suave">
      <h2 className="titulo-seccion-avepez">La Obra</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'justify' }}>
        <p className="texto-zapatito-cochinito" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          Avepez es un cuento sinfónico chileno producido por el grupo de música infantil Zapatito Cochinito, escrito por Sabina Cárdenas y Sebastián León, con música de Ernesto León.
        </p>
        <p style={{ marginBottom: '15px' }}>
          Narra la aventura de un joven pingüino de Humboldt que, tras una tormenta, queda varado y con un ala rota en la playa de Maicolpué. En su travesía por regresar al mar, es guiado y ayudado por diversas aves del sur de Chile: pilpilén, churrete, chucao, martín pescador y jote.
        </p>
        <p style={{ marginBottom: '15px' }}>
          La historia resalta la perseverancia, la solidaridad natural y el ciclo de la vida. La música está compuesta para un grupo de cámara que incluye cuarteto de cuerdas, trompeta, clarinete y percusiones, donde cada especie, como el chucao, tiene un tema musical e identidad única.
        </p>
        <p style={{ marginBottom: '15px', fontStyle: 'italic', color: 'var(--color-oceano-principal)' }}>
          Está pensada para un público familiar y tiene por objetivo concientizar acerca del cuidado de la fauna de nuestro país. Tiene una duración total aproximada de 35 minutos.
        </p>
      </div>
    </div>
  );
}
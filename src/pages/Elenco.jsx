import React from 'react';

export default function Elenco() {
  const artistas = [
    { rol: "Narradora", nombre: "Sabina Cárdenas" },
    { rol: "Narrador", nombre: "Sebastián León" },
    { rol: "Violín I", nombre: "Erika Prado" },
    { rol: "Violín II", nombre: "Camila Montero" },
    { rol: "Viola", nombre: "Javiera González" },
    { rol: "Cello", nombre: "Camila Huenuman" },
    { rol: "Clarinete", nombre: "Jair Moreno" },
    { rol: "Trompeta", nombre: "Cristian Rivera" },
    { rol: "Percusión", nombre: "Adrián Corvalán" },
    { rol: "Teclados", nombre: "Ernesto León" }
  ];

  const tecnico = [
    { rol: "Sonidista", nombre: "Byron Bugueño" },
    { rol: "Luces", nombre: "Aarón Bastías" },
    { rol: "Diapositivas", nombre: "Romy de San Pedro" }
  ];

  return (
    <div className="contenedor-avepez pagina-transicion-suave">
      <h2 className="titulo-seccion-avepez">Elenco Musical</h2>
      <div className="cuadrícula-elenco-avepez">
        {artistas.map((item, idx) => (
          <div key={idx} className="tarjeta-personal-avepez">
            <h3>{item.nombre}</h3>
            <p style={{ color: 'var(--color-acento-ave)', fontWeight: '500' }}>{item.rol}</p>
          </div>
        ))}
      </div>

      <h2 className="titulo-seccion-avepez" style={{ marginTop: '50px' }}>Equipo Técnico & Producción</h2>
      <div className="cuadrícula-elenco-avepez">
        {tecnico.map((item, idx) => (
          <div key={idx} className="tarjeta-personal-avepez" style={{ borderLeftColor: 'var(--color-bosque-secundario)' }}>
            <h3>{item.nombre}</h3>
            <p style={{ color: 'var(--color-oceano-principal)', fontWeight: '500' }}>{item.rol}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
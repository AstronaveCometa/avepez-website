import React from 'react';

export default function Requerimientos() {
  const itemsFicha = [
    { item: "Micrófonos ambientales", cantidad: 6 },
    { item: "Micrófonos dinámicos", cantidad: 4 },
    { item: "Cajas directas", cantidad: 1 },
    { item: "Cables XLR", cantidad: 11 },
    { item: "Mesa de sonido 12 canales", cantidad: 1 },
    { item: "Monitores amplificación", cantidad: "mínimo 2" },
    { item: "Monitores retorno", cantidad: 3 },
    { item: "Proyector", cantidad: 1 }
  ];

  return (
    <div className="contenedor-avepez pagina-transicion-suave">
      <h2 className="titulo-seccion-avepez">Requerimientos Técnicos</h2>
      <p style={{ marginBottom: '20px' }}>
        Ficha de requerimientos esenciales necesarios para el correcto montaje técnico y la óptima ejecución acústica de la obra en el recinto teatral:
      </p>
      <table className="tabla-requerimientos-avepez">
        <thead>
          <tr>
            <th>Item Requerido</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {itemsFicha.map((row, index) => (
            <tr key={index}>
              <td>{row.item}</td>
              <td>{row.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
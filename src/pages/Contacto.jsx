import React from 'react';

export default function Contacto() {
  return (
    <div className="contenedor-avepez pagina-transicion-suave">
      <h2 className="titulo-seccion-avepez">Contacto</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        ¿Tienes alguna duda o deseas agendar una presentación? Ponte en contacto con la producción general del ensamble.
      </p>

      <div className="contenedor-contacto-avepez">
        {/* Enlace Email */}
        <a href="mailto:zapatitocochinito.musica@gmail.com" className="item-contacto-avepez">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
            alt="Icono Correo" 
            className="icono-flaticon-avepez"
          />
          <span>zapatitocochinito.musica@gmail.com</span>
        </a>

        {/* Teléfono 1 */}
        <a href="tel:+56975323801" className="item-contacto-avepez">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
            alt="Icono Teléfono" 
            className="icono-flaticon-avepez"
          />
          <span>+56 9 7532 3801</span>
        </a>

        {/* Teléfono 2 */}
        <a href="tel:+56995055196" className="item-contacto-avepez">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
            alt="Icono Teléfono Alternativo" 
            className="icono-flaticon-avepez"
          />
          <span>+56 9 9505 5196</span>
        </a>
      </div>
    </div>
  );
}
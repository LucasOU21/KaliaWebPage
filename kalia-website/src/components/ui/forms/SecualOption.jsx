// src/components/ui/forms/SecualOptions.jsx - Exact match to Astro version
import React from 'react';

const SecualOptions = ({ options }) => {
  return (
    <>
      {options && options.map((o, index) => (
        <option 
          key={index}
          value={o.precio} 
          data-nombre={o.id} 
          data-unidad={o.tipoUnidad}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{o.nombre}
        </option>
      ))}
    </>
  );
};

export default SecualOptions;
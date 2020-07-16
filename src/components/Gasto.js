import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ex}) => {
  return (
    <li className="gastos">
      <p>
        {ex.nombre}
        <span className="gasto">$ {ex.gasto}</span>
      </p>
    </li>
  )
}

Gasto.propTypes = {
  ex: PropTypes.object.isRequired,
}

export default Gasto;

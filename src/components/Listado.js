import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({expenses}) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {
        expenses.map(ex => (
          <Gasto
            key={ex.id}
            ex={ex}
          />
        ))
      }
    </div>
  )
}

Listado.protoTypes = {
  expenses: PropTypes.array.isRequired,
}

export default Listado;

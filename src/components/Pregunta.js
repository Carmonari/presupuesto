import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({setRestBudget, setValueBudget, setShow}) => {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  const cambiar = e => {
    setBudget(parseInt(e.target.value));
  }

  const agregarPresupuesto = e => {
    e.preventDefault();

    if(budget < 1 || isNaN(budget)) {
      setError(true);
      return;
    }

    setError(false);

    setValueBudget(budget);
    setRestBudget(budget);
    setShow(false);
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error && <Error txt="El presupuesto es incorrecto" /> }

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Colaca tu presupuesto"
          onChange={cambiar}
        />

        <input
          type="submit" 
          className="button u-full-width"
          value="Guardar"
        />
      </form>
    </Fragment>
  )
}

Pregunta.propTypes = {
  setRestBudget: PropTypes.func.isRequired,
  setValueBudget: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
}

export default Pregunta;

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {revisarPresupuesto} from './helpers';

const ControlPresupuesto = ({valueBudget, restBudget}) => {
  //console.log(restBudget, valueBudget)
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ {valueBudget}
      </div>
      <div className={revisarPresupuesto(valueBudget, restBudget)}>
        Restante: $ {restBudget}
      </div>
    </Fragment>
  )
}

ControlPresupuesto.protoTypes = {
  valueBudget: PropTypes.number.isRequired,
  restBudget: PropTypes.number.isRequired,
}

export default ControlPresupuesto;

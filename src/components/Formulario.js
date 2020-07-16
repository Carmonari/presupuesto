import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({setExpense, setCreateExpense}) => {
  const [name, setName] = useState('');
  const [less, setLess] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = e => {
    e.preventDefault();

    if(less < 1 || isNaN(less) || name.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    const data = {
      nombre: name,
      gasto: less,
      id: shortid.generate()
    };

    setExpense(data);
    setCreateExpense(true);
    setName('');
    setLess(0);
  }

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agregar tus gastos aquí</h2>

      {error && <Error txt="Los campos son obligatorios o el presupuesto es incorrecto" />}

      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Renta"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={less}
          onChange={e => setLess(parseInt(e.target.value))}
        />
      </div>
      <input 
        type="submit"
        className="button u-full-width"
        value="Agregar"
      />
    </form>
  )
}

Formulario.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
}

export default Formulario;

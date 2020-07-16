import React from 'react';
import PropTypes from 'prop-types';

const Error = ({txt}) => {
  return (
    <p className="alert alert-danger error">{txt}</p>  
  )
}

Error.propTypes = {
  txt: PropTypes.string.isRequired,
}

export default Error;

import React from 'react';

const FormError = ({ message, id }) => {
  if (!message) {
    return null;
  }

  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-600">
      {message}
    </p>
  );
};

export default FormError;

import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      Load more
    </button>
  );
};

export default Button;

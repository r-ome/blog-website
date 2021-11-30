import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type ? props.type : 'button'}
        style={props.style}
        className="button"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;

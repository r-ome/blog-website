import React from 'react';
import './styles.css';

const TextField = (props) => {
  return (
    <div className="text-field" style={props.style}>
      <label>{props.label}:</label>
      <input
        type={props.type ? props.type : 'text'}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextField;

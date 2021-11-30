import React from 'react';
import './styles.css';

interface TextFieldProps {
  style: React.CSSProperties,
  label: React.ElementType,
  type: string,
  value: string,
  onChange: () => null | null
}

const TextField = (props: TextFieldProps) => {
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

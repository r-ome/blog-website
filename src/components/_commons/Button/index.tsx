import React from 'react';
import './styles.css';

interface ButtonProps {
  type: "button" | "submit" | "reset",
  style: React.CSSProperties,
  onClick: () => null | null,
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
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

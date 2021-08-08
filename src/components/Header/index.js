import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = (props) => {
  return (
    <div className="header">
      {props.routes.map((item, i) => {
        return (
          <div key={i}>
            <Link to={item.path}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Header;

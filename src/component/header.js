import React from 'react';
import '../css/header.css';
import Clock from './clock';

function Header(props) {
  return (
    <div className="header col-md-12 p-2">
      {/* <h2>Header</h2> */}
      <div className="text-right">
        <Clock startTime={props.startTime} />
      </div>
    </div>
  );
}

export default Header;
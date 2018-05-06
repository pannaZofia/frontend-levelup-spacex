import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
      <img
        className="header_image"
        src={"images/space_x_logo_bw_centered.png"} />
      </div>
    );
  }
}

export default Header;

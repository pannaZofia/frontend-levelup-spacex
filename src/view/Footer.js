import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      <img
        className="footer_image"
        src={"images/moon.png"} />
      </div>
    );
  }
}

export default Footer;

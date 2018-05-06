import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

class LaunchDetails extends React.Component {
  render() {
    return (
      <div>
      <Header />
      Launch flight number: {this.props.launch.flight_number}
      </div>
    );
  }
}

export default LaunchDetails;

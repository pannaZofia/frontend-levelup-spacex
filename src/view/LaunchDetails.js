import React from 'react';
import ReactDOM from 'react-dom';

class LaunchDetails extends React.Component {
  render() {
    return (
      <div>
      Ble<br />
      Launch flight number: {this.props.launch.flight_number}
      </div>
    );
  }
}

export default LaunchDetails;

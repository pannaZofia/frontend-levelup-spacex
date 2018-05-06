import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainInfo from './MainInfo';
import './LaunchDetails.css';

class LaunchDetails extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <MainInfo
        launch={this.props.launch}
        launchSite={this.props.launchSite}
        rocket={this.props.rocket} />
      Launch flight number: {this.props.launch.flight_number}
      </div>
    );
  }
}

export default LaunchDetails;

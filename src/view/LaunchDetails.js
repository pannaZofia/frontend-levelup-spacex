import React from 'react';
import ReactDOM from 'react-dom';
import './LaunchDetails.css';
import Header from './Header';
import MainInfo from './MainInfo';
import Footer from './Footer';

class LaunchDetails extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <MainInfo
        launch={this.props.launch}
        launchSite={this.props.launchSite}
        rocket={this.props.rocket} />
        <Footer />
      </div>
    );
  }
}

export default LaunchDetails;

import React from 'react';
import ReactDOM from 'react-dom';
import './DetailedInfo.css';

class DetailedInfo extends React.Component {
  render() {
    return (
      <div className="DetailedInfo">
        <div>
          <h3 className="header_sml">
            Details
          </h3>
          <p>{this.props.launch.details}</p>
        </div>
        <div>
          <h3 className="header_sml">
            Rocket
          </h3>
          <p>Name: {this.props.rocket.name}</p>
          <p>Company: {this.props.rocket.company}</p>
          <p>Country: {this.props.rocket.country}</p>
        </div>
        <div>
          <h3 className="header_sml">
            Site
          </h3>
          <p>Name: {this.props.launchSite.full_name}</p>
          <p>Location: {this.props.launchSite.location.name}</p>
          <p>Region: {this.props.launchSite.location.region}</p>
          <p>Details: {this.props.launchSite.details}</p>
        </div>
      </div>
    );
  }
}

export default DetailedInfo;

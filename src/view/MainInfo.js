import React from 'react';
import ReactDOM from 'react-dom';
import './MainInfo.css';
import BasicInfo from './BasicInfo';
import DetailedInfo from './DetailedInfo';

class MainInfo extends React.Component {
  render() {
    return (
      <div className="main_info">
        <BasicInfo
          launch={this.props.launch}/>
        <DetailedInfo
          launch={this.props.launch}
          launchSite={this.props.launchSite}
          rocket={this.props.rocket} />
      </div>
    );
  }
}

export default MainInfo;

import React from 'react';
import ReactDOM from 'react-dom';
//import './BasicInfo.css';

class BasicInfo extends React.Component {
  render() {
    return (
      <div className="BasicInfo">
        <h2 className="header_big">
          {
            this.props.launch.rocket.second_stage.payloads[0].payload_id +
            " " +
            this.props.launch.rocket.second_stage.payloads[0].payload_type +
            " launch"
          }
        </h2>
      </div>
    );
  }
}

export default BasicInfo;

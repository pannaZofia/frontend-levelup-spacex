import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './BasicInfo.css';

class BasicInfo extends React.Component {
  render() {
    return (
      <div className="BasicInfo">
      <div className="basic_info_element">
        <h2 className="header_big">
          {
            this.props.launch.rocket.second_stage.payloads[0].payload_id +
            " " +
            this.props.launch.rocket.second_stage.payloads[0].payload_type +
            " launch"
          }
        </h2>
      </div>
      <div className="basic_info_element">
        <Counter
          from={ Math.floor((new Date()).getTime() / 1000) }
          to={this.props.launch.launch_date_unix}/>
      </div>
      </div>
    );
  }
}

export default BasicInfo;

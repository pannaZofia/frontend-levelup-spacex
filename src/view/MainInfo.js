import React from 'react';
import ReactDOM from 'react-dom';
import './MainInfo.css';
import BasicInfo from './BasicInfo';

class MainInfo extends React.Component {
  render() {
    return (
      <div className="MainInfo">
        <BasicInfo
          launch={this.props.launch}/>
      </div>
    );
  }
}

export default MainInfo;

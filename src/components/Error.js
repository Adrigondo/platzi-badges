import React, { Component } from 'react';

import './styles/Loader.css';

class Error extends Component {
  render() {
    return (
      <div className="Loader">
        <div className="text-center" >
          <h1 className="Loader__title">Uups!</h1>
          <h3>{this.props.error.message}</h3>
        </div>
        <div className="lds-grid">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
export default Error;
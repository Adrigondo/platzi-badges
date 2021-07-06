import React from 'react';

import './styles/PageError.css';
import Error from "./Error"
function PageError(props) {
  return (
    <div className="PageError">
      <Error error={props.error}/>
    </div>
  );
}

export default PageError;

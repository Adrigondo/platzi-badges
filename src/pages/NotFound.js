import React from "react";

import logo404 from "../images/404-error-V4.svg";
import "./styles/NotFound.css";

function NotFound(){
  return(
    <div className="NotFound">
      <div className="NotFound__container">
        <div className="NotFound__container--information">
          <h1 className="NotFound__title" >YOU REACHED AN EXISTENTIAL VOID!</h1>
          <h4>The page you are trying to access does not exist.</h4>
        </div>
        <img className="img-fluid NotFound__img" src={logo404} alt="404 Error: Not Found" />
      </div>
    </div>
  );
}
export default NotFound;
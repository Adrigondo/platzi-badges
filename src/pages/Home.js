import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css"
import confLogo from "../images/platziconf-logo.svg";
import astronautsImage from "../images/astronauts.svg";

class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Home">
          <div className="d-flex justify-content-center align-items-center Home__container">
            <div className="Home__col">
              <img src={confLogo} alt="Conference logo" className="mb-4"/>
              <div className="Home__information">
                <h1 className="fw-light" >PRINT YOUR BADGES</h1>
                <h4 className="wrap break-text" >The easiest way to manage your conference</h4>
                <br />
                <Link to="/badges/" className="Home__button btn btn-primary">
                  Start now
                </Link>
              </div>
            </div>
            <div className="Home__col">
              <img src={astronautsImage} alt="Astronauts Platzi" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Home;
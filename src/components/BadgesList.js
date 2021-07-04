import React from "react"

import "./styles/BadgesList.css";
import twitterIcon from "../images/twitter-icon.png";
class BadgesList extends React.Component {
  render(){
    return(
      <ul className="list-unstyled">
        {this.props.badges.map((badge)=>{
          return(
            <li key={badge.id} className="Badge__element">
              <div className="d-flex">
                <img className="img-fluid Badge__element--img" src={badge.avatarURL} alt="" />
                <div className="">
                  <span className="fw-bold" >{badge.firstName} {badge.lastName}</span>
                  <div className="Badge__element--twitter d-flex align-items-center">
                    <img className="img-fluid" src={twitterIcon} alt="Twitter icon" />
                    @{badge.twitter}
                  </div>
                  <span className="Badge__element--job-title">{badge.jobTitle}</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default BadgesList;
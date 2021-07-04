import React from "react"

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render(){
    return(
      <ul className="list-unstyled">
        {this.props.badges.map((badge)=>{
          return(
            <li key={badge.id} className="Badge__element">
              <span className="fw-bold" >{badge.firstName} {badge.lastName}</span>
              <div className="Badge__element--twitter">
                @{badge.twitter}
              </div>
              <span className="Badge__element--job-title">{badge.jobTitle}</span>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default BadgesList;
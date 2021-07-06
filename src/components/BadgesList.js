import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import twitterIcon from "../images/twitter-icon.png";
import editIcon from "../images/edit-icon-V2.svg"

import Gravatar from "./Gravatar";

function BadgesListItem(props){
  let badge=props.badge;
  return(
    <div className="d-flex">
      <Gravatar
        className="img-fluid Badge__element--img"
        email={badge.email}
      />
      <div className="">
        <span className="fw-bold" >{badge.firstName} {badge.lastName}</span>
        <div className="Badge__element--twitter d-flex align-items-center">
          <img className="img-fluid" src={twitterIcon} alt="Twitter icon" />
          @{badge.twitter}
        </div>
        <span className="Badge__element--job-title">{badge.jobTitle}</span>
      </div>
    </div>
  )
}
class BadgesList extends React.Component {
  render(){
    if(this.props.badges.length===0){
      return(
        <div>
          <h3>No badges were found.</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create your first Badge!
          </Link>
        </div>
      )
    }
    return(
      <ul className="list-unstyled">
        {this.props.badges.map((badge)=>{
          return(
            <li key={badge.id} className="Badge__element">
              <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none">
                <BadgesListItem badge={badge}/>
              </Link>
              <Link to={`/badges/${badge.id}/edit`} className="Badge__element--link">
                <img src={editIcon} alt="Edit" />
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default BadgesList;
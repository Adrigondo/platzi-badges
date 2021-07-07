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

function useSearchBadges(badges){
  const [query, setQuery]=React.useState("");
  const [filteredBadges, setFilteredBadges]=React.useState(badges);
  
  React.useMemo(()=>{
    // const result = badges.filter(badge=>{
    //   return `${badge.firstName} ${badge.lastName}`
    //   .toLowerCase()
    //   .includes(query.toLowerCase());
    // });
    const result = badges.filter(badge=>{
      const nameClean=deleteSpecialCaracters(
        `${badge.firstName} ${badge.lastName}`)
        .toLowerCase();
      const queryClean=deleteSpecialCaracters(query).toLowerCase();
      return nameClean.includes(queryClean);
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return {query, setQuery, filteredBadges}
}

function BadgesList({badges}){
  const {query, setQuery, filteredBadges}=useSearchBadges(badges);

  if(badges.length===0){
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
    <div className="BadgesList">
      <div className="form-group mb-4">
        <label>Filter Badges</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge)=>{
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
    </div>
  )
}
export default BadgesList;


function deleteSpecialCaracters(text) {
  // Delete all special caracters, except "ñ"
  return text
         .normalize('NFD')
         .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
         .normalize();
}
import React from "react";
import { Link } from "react-router-dom";

import api from "../api";

import "./styles/BadgeDetails.css";
import confLogo from '../images/platziconf-logo.svg';
import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class BadgeDetails extends React.Component{
  state={
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount(){
    this.fetchData();
  }
  fetchData= async () =>{
    this.setState({
      loading: true,
      error: null,
    })
    
    try{
      const data= await api.badges.read(this.props.match.params.badgeId)
      this.setState({
        loading: false,
        data: data,
      })
    }catch(error){
      this.setState({
        loading: false,
        error: error,
      })
    }
  }
  render(){
    if(this.state.loading){
      return(
        <PageLoading />
      );
    }
    if(this.state.error){
      return(
        <PageError error={this.state.error}/>
      );
    }
    const badge=this.state.data;
    return(
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Conference logo" className="img-fluid BadgeDetails__hero--img" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={badge.firstName || "First Name"}
                lastName={badge.lastName || "Last Name"}
                jobTitle={badge.jobTitle || "Job title"}
                twitter={badge.twitter || "platzi_student"}
                email={badge.email}
              />
            </div>
            <div className="col-6">
              <h2>Actions</h2>
              <div className="">
                <div className="mb-4">
                  <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary">Edit</Link>
                </div>
                <div className="">
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment> 
    )
  }
}
export default BadgeDetails;
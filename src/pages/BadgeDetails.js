import React from "react";
import { Link } from "react-router-dom";

import api from "../api";

import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import DeleteBadgeModal from "../components/modals/DeleteBadgeModal";

import "./styles/BadgeDetails.css";
import confLogo from '../images/platziconf-logo.svg';

function BadgeDetails(props){
  const badge=props.badge;
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
          <div className="col-5 offset-2">
            <Badge 
              firstName={badge.firstName || "First Name"}
              lastName={badge.lastName || "Last Name"}
              jobTitle={badge.jobTitle || "Job title"}
              twitter={badge.twitter || "platzi_student"}
              email={badge.email}
            />
          </div>
          <div className="col-3 d-flex flex-column justify-content-center align-items-center">
            <h2>Actions</h2>
            <div className="w-100">
              <div className="d-grid gap-2 mb-3">
                <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary btn-lg">Edit</Link>
              </div>
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-danger btn-lg"
                  onClick={props.onOpenModal}
                >
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment> 
  )
}

class BadgeDetailsContainer extends React.Component{
  state={
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen:false,
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

  handleOpenModal = e =>{
    this.setState({modalIsOpen:true})
  }
  handleCloseModal = e =>{
    this.setState({modalIsOpen:false})
  }
  handleDeleteBadge=async e=>{
    this.setState({
      loading: true,
      error: null,
    })
    try{
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({
        loading: true,
      })
      this.props.history.push("/badges");
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
    return(
      <BadgeDetails
        badge={this.state.data}

        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
      />
    );
  }
}

export default BadgeDetailsContainer;
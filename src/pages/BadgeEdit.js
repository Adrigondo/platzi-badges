import React from "react";

import api from "../api";

import "./styles/BadgeEdit.css";
import logo from '../images/platziconf-logo.svg';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class BadgeEdit extends React.Component{
  state={
    loading: true,
    error: null,
    form:{
      firstName:"",
      lastName:"",
      email:"",
      jobTitle:"",
      twitter:"",
    }
  };
  handleChange= e =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }
  handleSubmit= async e =>{
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    })
    
    try{
      await api.badges.update(
        this.props.match.params.badgeId,
        this.state.form
      )
      this.setState({
        loading: false,
      })
      this.props.history.push("/badges")
    }catch(error){
      this.setState({
        loading: false,
        error: error,
      })
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData= async ()=>{
    this.setState({
      loading: true,
      error: null,
    })
    
    try{
      const data= await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({
        loading: false,
        form: data,
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
    return(
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img src={logo} alt="Logo" className="img-fluid BadgeEdit__hero--img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                jobTitle={this.state.form.jobTitle || "Job title"}
                twitter={this.state.form.twitter || "platzi_student"}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                form={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default BadgeEdit;
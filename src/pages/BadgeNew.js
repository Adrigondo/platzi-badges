import React from "react";

import "./styles/BadgeNew.css";
import logo from '../images/badge-header.svg';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class PageBadge extends React.Component{
  state={
    form:{
      firstName:"",
      lastName:"",
      email:"",
      jobTitle:"",
      twitter:"",
    }
  };
  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }
  render(){
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                gravatarURL="https://secure.gravatar.com/avatar/74b143021b70bb936f4edbc9e11ecb1b"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} form={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default PageBadge;
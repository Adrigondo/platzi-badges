import React from "react"
import { Link } from "react-router-dom";

import api from "../api";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import Loader from "../components/Loader";
import PageError from "../components/PageError";

class Badges extends React.Component {
  state={
    loading: true,
    error: null,
    data: undefined,
  }
  componentDidMount(){
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  fetchData= async () => {
    this.setState({
      loading: true,
      error: null,
    })

    try{
      const data = await api.badges.list();
      this.setState({
        loading: false,
        data: data,
      })
    } catch(error){
      this.setState({
        loading: false,
        error: error,
      })
    }
  }
  render(){
    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Conference Logo" className="Badges__conf-logo" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              { this.state.error ?
                <PageError error={this.state.error}/>
              : ( this.state.data ?
                <BadgesList badges={this.state.data} />

              : <Loader />

              )}
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
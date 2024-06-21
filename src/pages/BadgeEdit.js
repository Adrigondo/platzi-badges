import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api";

import "./styles/BadgeEdit.css";
import logo from '../images/platziconf-logo.svg';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

const BadgeEdit = (props) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    }
  });
  const navigate = useNavigate();
  let { badgeId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = e => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    })
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setState({
      loading: true,
      error: null,
    })

    try {
      await api.badges.update(
        badgeId,
        state.form
      )
      setState({
        loading: false,
      })
      navigate("/badges")
    } catch (error) {
      console.error(error);
      setState({
        loading: false,
        error: error,
      })
      console.error(error);
    }
  }
  const fetchData = async () => {
    setState({
      loading: true,
      error: null,
    })

    try {
      const data = await api.badges.read(
        badgeId
      )
      setState({
        loading: false,
        form: data,
      })
    } catch (error) {
      setState({
        loading: false,
        error: error,
      })
      console.error(error);
    }
  }

  if (state.loading) {
    return (
      <PageLoading />
    );
  }
  if (state.error) {
    return (
      <PageError error={state.error} />
    );
  }
  return (
    <React.Fragment>
      <div className="BadgeEdit__hero">
        <img src={logo} alt="Logo" className="img-fluid BadgeEdit__hero--img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={state.form.firstName || "First Name"}
              lastName={state.form.lastName || "Last Name"}
              jobTitle={state.form.jobTitle || "Job title"}
              twitter={state.form.twitter || "platzi_student"}
              email={state.form.email}
            />
          </div>
          <div className="col-6">
            <h1>Edit Attendant</h1>
            <BadgeForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              form={state.form}
              error={state.error}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default BadgeEdit;
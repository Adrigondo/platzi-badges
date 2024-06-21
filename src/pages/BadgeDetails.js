import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import api from "../api";

import Badge from "../components/Badge";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import DeleteBadgeModal from "../components/modals/DeleteBadgeModal";

import "./styles/BadgeDetails.css";
import confLogo from '../images/platziconf-logo.svg';

const BadgeDetails = (props) => {
  const badge = props.badge;
  return (
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

const BadgeDetailsContainer = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  });
  const navigate = useNavigate();
  let { badgeId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setState({
      ...state,
      loading: true,
      error: null,
    })

    try {
      const data = await api.badges.read(badgeId)
      setState({
        ...state,
        loading: false,
        data: data,
      })
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: error,
      })
      console.error(error);
    }
  }

  const handleOpenModal = e => {
    setState({
      ...state, modalIsOpen: true
    })
  }
  const handleCloseModal = e => {
    setState({
      ...state, modalIsOpen: false
    })
  }
  const handleDeleteBadge = async e => {
    setState({
      ...state,
      loading: true,
      error: null,
    })
    try {
      await api.badges.remove(badgeId);
      setState({
        ...state,
        loading: true,
      })
      navigate("/badges");
    } catch (error) {
      setState({
        ...state,
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
    <BadgeDetails
      badge={state.data}

      onCloseModal={handleCloseModal}
      onOpenModal={handleOpenModal}
      modalIsOpen={state.modalIsOpen}
      onDeleteBadge={handleDeleteBadge}
    />
  );
}

export default BadgeDetailsContainer;
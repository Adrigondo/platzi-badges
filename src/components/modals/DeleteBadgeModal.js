import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props){
  return(
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      onDeleteBadge={props.onDeleteBadge}
    >
      <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge!</p>
        <div className="row">
          <div className="col">
            <button className="btn btn-danger"
            onClick={props.onDeleteBadge}>
              Delete!
            </button>
          </div>
          <div className="col">
            <button className="btn btn-secondary"
            onClick={props.onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default DeleteBadgeModal;
import React from "react";
import { StyledModal } from "./DetailsModal.style";

function DetailsModal(props) {
  return (
    <StyledModal
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      bgColor={props.item.cover_color}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.item.titles.en}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img
              className="card-img-top"
              src={props.item.banner_image}
              alt=""
            />
            <p className="card-text">
              <strong>Title: </strong>
              {props.item.titles.en}
            </p>
            <p className="card-text">
              <strong>Trailer: </strong>
              <a href={props.item.trailer_url}>
                {props.item.trailer_url ? "Link" : "N/A"}
              </a>
            </p>
            <p className="card-text">
              <strong>Genres: </strong>
              {props.item.genres.map((item, index) => {
                return `${item}${index !== item.length - 1 ? ", " : "."}`;
              })}
            </p>
            <p className="card-text">
              <strong>Description: </strong>
              {props.item.descriptions.en ? props.item.descriptions.en : "N/A"}
            </p>
            <p className="card-text">
              <strong>Start Date: </strong>
              {new Date(props.item.start_date).toDateString()}
            </p>
            <p className="card-text">
              <strong>End Date: </strong>
              {new Date(props.item.end_date).toDateString()}
            </p>
            <p className="card-text">
              <strong>No. of Episodes: </strong>
              {props.item.episodes_count}
            </p>
            <p className="card-text">
              <strong>Episode Duration: </strong>
              {`${props.item.episode_duration} minutes`}
            </p>
            <p className="card-text">
              <strong>Rating: </strong>
              {Math.round((props.item.score / 20) * 10) / 10}
            </p>
            <p className="card-text">
              <strong>Season Period: </strong>
              {props.item.season_period}
            </p>
            <p className="card-text">
              <strong>Season Year: </strong>
              {props.item.season_year}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
}

export default DetailsModal;
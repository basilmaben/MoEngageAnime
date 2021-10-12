import React, { useState } from "react";
import DetailsModal from '../DetailsModal/DetailsModal';
import { StyledGrid, StyledGridItem, StyledResults } from "./ResultPage.style";

function ResultPage(props) {
  const [selectedAnime, setSelectedAnime] = useState();

  return (
    <>
      {props.resultItems.length && (
        <StyledResults>Search Results:</StyledResults>
      )}
      <StyledGrid>
        {props.resultItems.length ? (
          props.resultItems.map((item) => {
            return (
              <StyledGridItem
                key={item.anilist_id}
                className="card"
                style={{ width: "14rem" }}
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  setSelectedAnime(item);
                }}
                bgColor={item.cover_color}
              >
                <img
                  className="card-img-top"
                  src={item.cover_image}
                  alt=""
                  style={{ height: "318px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.titles.en}</h5>
                  <p className="card-text">
                    <strong>Trailer: </strong>
                    <a href={item.trailer_url}>
                      {item.trailer_url ? "Link" : "N/A"}
                    </a>
                  </p>
                  <p className="card-text">
                    <strong>Genres: </strong>
                    {item.genres.map((childitem, index) => {
                      return `${childitem}, `;
                    })}
                  </p>
                  <p className="card-text">
                    <strong>Description: </strong>
                    {item.descriptions.en ? item.descriptions.en : "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Rating: </strong>
                    {Math.round((item.score / 20) * 10) / 10}
                  </p>
                  <p className="card-text">
                    <strong>Season Year: </strong>
                    {item.season_year}
                  </p>
                  <p className="card-text">
                    <strong>No. of Episodes: </strong>
                    {item.episodes_count}
                  </p>
                </div>
                {selectedAnime && (
                  <DetailsModal item={selectedAnime} id={selectedAnime.id} />
                )}
              </StyledGridItem>
            );
          })
        ) : (
          <h1>No Results Found!</h1>
        )}
      </StyledGrid>
    </>
  );
}

export default ResultPage;
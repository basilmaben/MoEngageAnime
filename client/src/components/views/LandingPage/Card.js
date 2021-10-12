import * as React from "react";
import ImageList from "@mui/material/ImageList";
import './Card.css';
import styled from 'styled-components'

export default function TitlebarImageList(props, { item }) {
    const { topanime, animelist } = props;

  
  let data = topanime;
  // console.log(animelist.length);
  if (animelist!==undefined && animelist.length !== 0) {
    data = animelist;
  }
    
    
    return (
        <>
      <h2 className="heading">Top Animes</h2>
    <ImageList className="imageList" cols={4} >
      {data.map((item) => (
          <Main className="imagelistitem" key={item.id}>
          <img
            src={`${item.cover_image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.cover_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={() => {
              props.createtemp({
                detail: item,
                flag: true
              });
                  }} />
             <Title className="imagelistitem" key={item.id}>{item.titles.en}</Title>
              <Detail >Trailer: <a href={item.trailer_url}>
        {item.trailer_url ? "Link" : "N/A"}
        </a></Detail>
              <Detail>Genres: {item.genres.slice(0,1)}</Detail>
              <Detail> <b>Description: ...{}</b></Detail>
              <Detail>Rating: {item.score}</Detail>
              <Detail>Year: {new Date(item.start_date).toDateString()}</Detail>
              <Detail>No of Episodes: {item.episodes_count} </Detail>     
   </Main>
      ))}
    </ImageList>
    </>
  );
}


  

const Main = styled.div`
  width: 15vw;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  padding: 20px;
  margin: 2vh 2vw;
`;


const Title = styled.span`
  margin-top: 14px;
  font-weight: 700;
  font-size: 1.3vw;
  color: #fbfbfb;
`;

const Detail = styled.span`
  margin-top: 6px;
  color: #b3b3b3;
  &:hover {
    text-decoration: underline;
  }
`;




 
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import {useState} from 'react';
import "./Details.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const labels = {
  0.5: "Meh",
  1: "NVM",
  1.5: "Might Not Go",
  2: "Fair",
  2.5: "Ok",
  3: "Might Go",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

export default function RecipeReviewCard(props) {
  const { detail } = props;
  const [review , setReview]=useState("");
  const [dd , setdd]=useState(false);
  // console.log(detail)
  const {
    cover_image,
    titles,
    descriptions,
    score,
    season_year,
    episodes_count,
      trailer_url,
      genres,
      start_date,
      end_date,
      episode_duration,
      season_period,
  } = detail;
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let msg=""

  return (
    <Card className="Card" sx={{ backgroundColor: "black", width: 900, height: 900, display: "flex" }}>
     <CardMedia
        className="cardmedial"
        component="img"
        height="300"
        width="300"
        image={cover_image}
        alt="Paella dish"
      />
      <CardContent sx={{backgroundColor: "black", color: 'white'}} className="cardcontent">
        <b className="title">{titles.en}</b>
        <Typography variant="body2" color="white">
          <b>Description:</b> {descriptions.en.slice(0,200) ? descriptions.en : "Not Available"}
        </Typography>
        <p><b>Rating:</b> {score}</p>
        <p><b>Season Year: </b>{season_year}</p>
        <p><b>Number of Episode: </b>{episodes_count}</p>
        <p><b>Trailer:</b> <a href={trailer_url}>
        {trailer_url ? "Link" : "N/A"}
        </a></p>
        <p><b>Genre:</b> {genres.map((item, index) => {
        return `${item}${index !== item.length - 1 ? ", " : "."}`;
        })}</p>
              <p><b>Start Date: </b> {new Date(start_date).toDateString()} </p>
              <p><b>End Date:</b> {new Date(end_date).toDateString()}</p>
              <p><b>Episode Duration:</b> {`${episode_duration} minutes`}</p>
              <p><b>Season Period:</b> {season_period }</p>
             
        <Box
          sx={{
            width: 400,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
        <span>{dd?review:null}</span>
        <input type="text" placeholder="Write Review" onChange={(e)=>{
            console.log(e.target.value);
            setReview( e.target.value)
        }} />
              <button style={{ color: 'white', backgroundColor: '#1DB954' }}onClick={()=>{
          setdd(true)
        }}>Add review</button>
      </CardContent>

      <CardActions disableSpacing></CardActions>
      
    </Card>
  );
}
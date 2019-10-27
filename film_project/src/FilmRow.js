import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from './Fave'

function FilmRow(props) {
  // let posterUrl = "https://image.tmdb.org/t/p/w500/"+props.list.poster_path
  let year = new Date(props.list.release_date);
  var handleDetailsClick = (film) =>{
    console.log("Fetching details for " + film.title);
  };
  return (
    <div className="film-row" onClick = {()=>handleDetailsClick('film')}>
      {/* <img src={posterUrl} alt="" /> */}
      <FilmPoster list={props.list} />
      <div className="film-summary">
        <Fave/>
        <h1>{props.list.title}</h1>
        <p>{year.getFullYear()}</p>
      </div>
    </div>
  );
}

export default FilmRow;

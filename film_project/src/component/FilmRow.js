import React from 'react'
import FilmPoster from "./FilmPoster";
import Fave from './Fave'

const  FilmRow  = (props) => {
   // let posterUrl = "https://image.tmdb.org/t/p/w500/"+props.list.poster_path
   const handleDetailsClick = (film) =>{
     console.log("Fetching details for " + film.title);
     handleDetailsClick(film) 
  };
    let year = new Date(props.film.release_date);
    return (
      <div className="film-row" onClick = {()=> props.handleDetailsClick(props.film)}>
        {/* <img src={posterUrl} alt="" /> */}
        <FilmPoster list={props.film} />
        <div className="film-summary">
          <Fave onFaveToggle = {() => props.onFaveToggle(props.film)}
           isFave = {props.isFave} />
          <h1>{props.film.title}</h1>
          <p>{year.getFullYear()}</p>
         
        </div>
      </div>
    );
  }

export default  FilmRow 
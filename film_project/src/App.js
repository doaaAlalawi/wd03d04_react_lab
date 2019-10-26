import React from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from './FilmDetails';
import TMDB from "./TMDB";
function App() {
  return (
  
    <div className="film-library">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
         <FilmListing list={TMDB.films} />
      </div>
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetails films ={TMDB.films}/>
      </div>
    </div>

  );
}

export default App;

import React, { Component } from 'react'
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from './FilmDetails';
import TMDB from "./TMDB";

export default class App extends Component {
  render() {
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
    )
  }
}


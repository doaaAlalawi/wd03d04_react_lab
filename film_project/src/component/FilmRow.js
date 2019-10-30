import React, { Component } from 'react'
import FilmPoster from "./FilmPoster";
import Fave from './Fave'

export default class FilmRow extends Component {
   // let posterUrl = "https://image.tmdb.org/t/p/w500/"+props.list.poster_path
  handleDetailsClick = (film) =>{
     console.log("Fetching details for " + film.title);
     this.props.handleDetailsClick(film) 
  };
  render() {
    let year = new Date(this.props.film.release_date);
    return (
      <div className="film-row" onClick = {()=> this.handleDetailsClick('film')}>
        {/* <img src={posterUrl} alt="" /> */}
        <FilmPoster list={this.props.film} />
        <div className="film-summary">
          <Fave onFaveToggle = {() => this.props.onFaveToggle(this.props.film)}
           isFave = {this.props.isFave} />
          <h1>{this.props.film.title}</h1>
          <p>{year.getFullYear()}</p>
        </div>
      </div>
    );
  }
}
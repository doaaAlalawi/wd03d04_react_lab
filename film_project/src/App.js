import React, { Component } from "react";
import "./App.css";
import FilmListing from "./component/FilmListing";
import FilmDetails from "./component/FilmDetails";
import TMDB from "./TMDB";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.state = {
      film: TMDB.films,
      faves: [],
      current: {}
    };
  }

  handleFaveToggle = film => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    if (filmIndex < 0) {
      faves.push(film);
      console.log(`Adding ${film.title} to faves...`);
      console.log(faves);
    } else {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves...`);
      console.log(faves);
    }
    this.setState({ faves });
  };

  handleDetailsClick = film => {
    console.log("Fetching details for " + film.title);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    console.log(url)
    axios({
      method: "GET",
      url: url
    }).then(response => {
      console.log(response); // take a look at what you get back!
      this.setState({ current: response.data });
    });
  };

  render() {
    return (
      <div className="film-library">
        <FilmListing
          films={this.state.film}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
          handleDetailsClick={this.handleDetailsClick}
        />
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {

    state = {
      filter: null
    };
  handleFilterClick = filter => {
    console.log("Setting filter to " + filter);
    this.setState({ filter: filter });
  };
  render() {
    let allFilms = this.props.films.map((film) => {
      return (
        <FilmRow film = {film} key = {film.id}
        onFaveToggle = {() => this.props.onFaveToggle(film)}
        isFave = {this.props.faves.includes(film)}
        handleDetailsClick = {() => this.props.handleDetailsClick(film)}
        />
      )
    });

    let favefilm = this.props.films.map((film)=>{
      return (
        <FilmRow film = {film} key = {film.id}
        onFaveToggle = {() => this.props.onFaveToggle(film)}
        isFave = {this.props.faves.includes(film)}
        handleDetailsClick = {() => this.props.handleDetailsClick(film)}
        />
      )
    })
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${ this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick("all")} >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${ this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick("faves")} >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>
        {/* <h1> {props.films[0].title}</h1> */}
        <div>{allFilms}</div>
        {/* {this.state.filter === null ? allFilms : favefilm } */}
      </div>
    );
  }
}

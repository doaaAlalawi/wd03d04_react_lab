import React, { Component } from 'react'
import "./App.css";
import FilmListing from "./component/FilmListing";
import FilmDetails from './component/FilmDetails';
import TMDB from "./TMDB";

export default class App extends Component {
  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.state = {
      film:TMDB.films,
      faves:[],
      current:{}
    }
  }
  
  handleFaveToggle = (film) =>{
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
     if (filmIndex < 0){
      faves.push(film)
      console.log (`Adding ${film.title} to faves...`)
      console.log(faves)
    }
    else
    {
      faves.splice(filmIndex,1)
      console.log (`Removing ${film.title} from faves...`)
      console.log(faves)
    }
    this.setState({faves});
  }
  render() {
    return (
      <div className="App" >
        <div className="film-library">
         <FilmListing films = {this.state.film} 
         faves = {this.state.faves} 
         onFaveToggle = {this.handleFaveToggle}/>
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetails film = {this.state.current}/>
      </div>
      </div>
    </div>
    )
  }
}


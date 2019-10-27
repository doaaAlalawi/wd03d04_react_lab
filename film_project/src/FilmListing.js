import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor() {
    super();
    this.state = {
      filter: null
    };
  }
  handleFilterClick = filter => {
    console.log("Setting filter to " + filter);
    this.setState({ filter: filter });
  };
  render() {
    let allFilms = this.props.list.map(item => <FilmRow list={item} />);
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${ this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick("all")} >
            ALL
            <span className="section-count">{this.props.list.length}</span>
          </div>
          <div
            className={`film-list-filter ${ this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick("faves")} >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {/* <h1> {props.films[0].title}</h1> */}
        <div>{allFilms}</div>
      </div>
    );
  }
}

// import React from "react";
// import FilmRow from "./FilmRow";

// const FilmListing = props => {
//   let allFilms = props.list.map(item => <FilmRow list={item} />);

//   var handleFilterClick = (filter) => {
//     this.state({
//       filter: filter
//   })
//     console.log("etting filter to " + filter);
//   };

//   return (
// <div className="film-list">
//   <h1 className="section-title">FILMS</h1>
//   <div className="film-list-filters">
//     <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick = {()=>handleFilterClick('all')}>
//       ALL

//       {/* <span className="section-count">{this.props.films.length}</span> */}
//     </div>
//     <div className="film-list-filter" onClick = {() => handleFilterClick('faves')}>
//       FAVES
//       <span className="section-count">0</span>
//     </div>
//   </div>
//   {/* <h1> {props.films[0].title}</h1> */}
//   <div>{allFilms}</div>
// </div>
//   );
// };
// export default FilmListing;

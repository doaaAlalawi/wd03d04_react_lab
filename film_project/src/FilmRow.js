import React from 'react'
import FilmPoster from './FilmPoster'

function FilmRow(props) {
    // let posterUrl = "https://image.tmdb.org/t/p/w500/"+props.list.poster_path
    let year = new Date (props.list.release_date)
    return (
        <div>
  <div className="film-row">
  {/* <img src={posterUrl} alt="" /> */}
  <FilmPoster list = {props.list}/>
  <div className="film-summary">
    <h1>{props.list.title}</h1>
    <p>{year.getFullYear()}</p>
  </div>
</div>
        </div>
    )
}

export default FilmRow
import React from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
    let allFilms = props.list.map(item => <FilmRow list ={item} />)
    return (
        <div>
        <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {/* <h1> {props.films[0].title}</h1> */}
      {allFilms}
         </div>
        </div>
    )
}

export default FilmListing
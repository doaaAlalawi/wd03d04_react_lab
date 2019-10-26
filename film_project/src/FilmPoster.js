import React from 'react'

function FilmPoster(props) {
    let posterUrl = "https://image.tmdb.org/t/p/w500/"+props.list.poster_path
    return (
        <div>
            <img src={posterUrl} alt="" />
        </div>
    )
}

export default FilmPoster
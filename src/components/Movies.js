import React from 'react'
import { movies } from '../data'
let allMovies = movies


const Movie = (props) => {
  let allGenres = props.movie.genres.map( (genre) => { return <li>{genre}</li> } );
  return(
    <div>
      <h1>{props.movie.title}</h1>
      <h3>{props.movie.time}</h3>
      <ul>
        {allGenres}
      </ul>
    </div>
  )
}

const Movies = () => {
    let movieArray = allMovies.map((movie) => {
      let allGenres = movie.genres.map( (genre) => { return <li>{genre}</li> } );
      return(
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.time}</h3>
          <ul>
            {allGenres}
          </ul>
        </div>
      )
    })
    return (
        <div>
            <h1>Movies Page</h1>
            {movieArray}
        </div>
    )
}

module.exports = Movies

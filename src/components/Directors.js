import React from 'react'
import { directors } from '../data'

let allDirectors = directors


const Director = (props) => {
  let allMovies = props.director.movies.map( (movie) => { return <li>{movie}</li> } );
  return(
    <div>
      <h1>{props.director.name}</h1>
      <ul>
        {allMovies}
      </ul>
    </div>
  )
}

const Directors = () => {
    let directorArray = allDirectors.map((director) => {
      let allMovies = director.movies.map( (movie) => { return <li>{movie}</li> } );
      return(
        <div>
          <h1>{director.name}</h1>
          <ul>
            {allMovies}
          </ul>
        </div>
      )
    })
    return (
        <div>
            <h1>Directors Page</h1>
            {directorArray}
        </div>
    )
}

module.exports = Directors

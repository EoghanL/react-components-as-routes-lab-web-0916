import React from 'react'
import { actors } from '../data'

let allActors = actors


const Actor = (props) => {
  let allMovies = props.actor.movies.map( (movie) => { return <li>{movie}</li> } );
  return(
    <div key={props.actor.name}>
      <h1>{props.actor.name}</h1>
      <ul>
        {allMovies}
      </ul>
    </div>
  )
}

const Actors = () => {
    let actorArray = allActors.map((actor) => {
      let allMovies = actor.movies.map( (movie) => { return <li>{movie}</li> } );
      return(
        <div key={actor.name}>
          <h1>{actor.name}</h1>
          <ul>
            {allMovies}
          </ul>
        </div>
      )
    })
    return (
        <div>
            <h1>Actors Page</h1>
            {actorArray}
        </div>
    )
}

export default Actors

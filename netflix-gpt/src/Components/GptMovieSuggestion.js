import React from 'react'
import {useSelector} from "react-redux";
import MovieList from "./MovieList"
const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt)
  const { movieNames, movieResults } = gpt;
  if(!movieNames)
  {
    // show shimmer
    return null;
  }
  return (
    <div className="p-4  text-white bg-gradient-to-r from-black">
      {/* <MovieList title={movieNames[0]} movies={movieResults[0]} /> */}
      {/* <MovieList title={movieNames[1]} movies={moviesResults[1]} />
      <MovieList title={movieNames[2]} movies={moviesResults[2]} />
      <MovieList title={movieNames[3]} movies={moviesResults[3]} />
      <MovieList title={movieNames[4]} movies={moviesResults[4]} /> */}

      {
        movieNames.map((movieName,idx) => <MovieList key={movieName} title={movieName} movies={movieResults[idx]} /> )
      }
    </div>
  )
}
export default GptMovieSuggestion

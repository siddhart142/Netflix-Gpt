import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    // if(!movies) return;
    console.log("secondary",movies)
  return (
    <div className='bg-black'>
    {/* 
    movieList : popular
        movieCard * n
    movieList : Now Playing
    movieList : Trending
    movieList : documentaries
     */}
     <div className='-mt-80 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Popular"} movies={movies} />
      <MovieList title={"Up Coming"} movies={movies} />
      <MovieList title={"Crime Thriller"} movies={movies} />
      <MovieList title={"Horror"} movies={movies} />
      </div>
    </div>
  )
}

export default SecondaryContainer

import React, { useEffect } from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  //Fetch data from TMDB API and Update the Store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
            - videoBackground
            - videoTitle
        SecondaryContainer
            - MovieList*n 
            - cards*n 
      */}
    </div>
  )
}

export default Browse

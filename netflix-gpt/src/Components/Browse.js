import React, { useEffect } from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../Hooks/usePopular';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
const Browse = () => {
  //Fetch data from TMDB API and Update the Store
  useNowPlayingMovies();
  usePopular();
  
  const isGpt = useSelector((store) => store.gpt.showGptSearch)
  return (
    <div>
    <Header />
    {
      isGpt ?
      <GptSearch />
       :
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
    }
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

import React, { useRef } from 'react'
import lang from '../Utils/Language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../Utils/openai'
import { options } from '../Utils/constants'
import {addGptMovieResult} from "../Utils/gptSlice"


const GptSearchBar = () => {
  const searchKey = useRef(null)
  const dispatch = useDispatch();
  

  const searchMovieTmdb = async ( movie )=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options);
    const json = await data.json();

    return json.results;

  }
    const handleSearchGpt = async() =>{  
      const searchQuery = "Act as a movie recommendation system and suggestion some movies for the query :" + searchKey.current.value + "only give me names of 5 movies comma separated as shown in the example ahead. Example : Don, Sholay, Jawan, Gadar, Fukrey";
      const chatCompletion = await openai.chat.completions.create({
        
        messages: [{ role: 'user', content: searchQuery}],
        model: 'gpt-3.5-turbo',
      });
      console.log(chatCompletion.results)
      if(!chatCompletion.choices)
      {
          //todo
      }

      const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",")

      //For each movie search Tmdb api
      const data = gptMovies.map((movie) => searchMovieTmdb(movie));
      // [promise,promise,promise,promise,promise] => wont be resolved at first go
      // waits till all the 5 promises gets resolved.
      const tmdbResults = await Promise.all(data) 
      dispatch(addGptMovieResult({movieNames : gptMovies,movieResults : tmdbResults}));

    }

    const language = useSelector((store)=> store.config.lang)
  return (
    <div>
        <div className='absolute -z-10'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix" />
      </div>
    
    <div className='p-[10%] '>
      <form onSubmit={(e) => e.preventDefault()} className=' m-4 bg-black grid grid-cols-12 bg-opacity-70'>
        <input ref={searchKey} className='p-4 m-4 col-span-9 rounded-md' type="text" placeholder={lang[language].GptPlaceHolder}></input>
        <button onClick={handleSearchGpt}  className='col-span-3 m-4 py-2 px-2 bg-red-600 rounded-md'>{lang[language].search}</button>
      </form>
    </div>
    </div>
  )
}

export default GptSearchBar

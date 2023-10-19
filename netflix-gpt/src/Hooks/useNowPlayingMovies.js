import {options} from "../Utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/moviesSlice'
import { useEffect } from "react"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const now_playing = useSelector((store) => store.movies?.nowPlayingMovies)
    const getNowPlayingMovies = async () => {

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
    const list = await data.json();
    console.log(list.results);
    dispatch(addNowPlayingMovies(list.results));
    }

    useEffect( ()=>{
    !now_playing && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;
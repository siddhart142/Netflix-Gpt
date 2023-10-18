import {options} from "../Utils/constants"
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Utils/moviesSlice'
import { useEffect } from "react"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
    const list = await data.json();
    console.log(list.results);
    dispatch(addNowPlayingMovies(list.results));
    }

    useEffect( ()=>{
    getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;
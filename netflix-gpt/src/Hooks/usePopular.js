import { useDispatch, useSelector } from "react-redux"
import {options} from "../Utils/constants"
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
const usePopular = () =>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies?.popularMovies)
    const getPopularMovies = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
       !popularMovies && getPopularMovies();
    },[]);
}
export default usePopular;
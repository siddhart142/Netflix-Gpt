import { useEffect } from 'react'
import { options } from '../Utils/constants'
import { addTrailervideo } from '../Utils/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    
    const trailer = useSelector((store) => store.movies?.trailerVideo)
    const getMovieVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options)
        const json = await data.json();
        // console.log(json);

        const trailers = json.results.filter((video) => video.type==="Trailer")
        
        // trailer can be a state variable or we can simply keep the info of trailer into redux store
        const trailer = trailers.length ? trailers[0]: json.results[0];
        dispatch(addTrailervideo(trailer))
        // console.log(trailer)
    }

    useEffect(()=>{
        !trailer && getMovieVideos();
    },[]);

}

export default useMovieTrailer;
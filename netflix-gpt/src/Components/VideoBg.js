import { useSelector } from "react-redux"
import useMovieTrailer from "../Hooks/useMovietrailer"


const VideoBg = ({movieId}) => {

   
    const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)
    //fetch trailer video and update store
    useMovieTrailer(movieId);
  return (
    <div>
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerVideo?.key+'?&autoplay=1&mute=1;controls=0'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBg

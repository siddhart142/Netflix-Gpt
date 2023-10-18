import React from 'react'
import { IMAGE_URL } from '../Utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMAGE_URL + posterPath} />
    </div>
  )
}

export default MovieCard

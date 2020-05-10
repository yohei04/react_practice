import React, { useState } from 'react'
import Movie from './Movie'

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: '111',
    },
    {
      name: 'Game of Thrones',
      price: '$20',
      id: '222',
    },
    {
      name: 'Inception',
      price: '$30',
      id: '333',
    },
  ]);

  return (
    <>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </>
  );
}

export default MovieList


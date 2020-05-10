import React, { useState, createContext } from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
};



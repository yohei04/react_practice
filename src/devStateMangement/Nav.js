import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';


const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav style={nav}>
      <h3>Dev Ed</h3>
      <p>List of Movies: {movies.length}</p>
    </nav>
  )
}


const nav = {
  background: 'black',
  color: 'white',
}

export default Nav


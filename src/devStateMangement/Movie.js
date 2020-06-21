import React from 'react'

const Movie = ({name, price}) => {
  return (
    <div>
      <p>{name}</p>
      <h3>{price}</h3>
    </div>
  );
};

export default Movie


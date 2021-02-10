import React from 'react';

const Character = ({ image, name }) => {
  <figure>
    <image src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>;
};

export default Character;

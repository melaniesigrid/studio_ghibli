import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

function FilmCard({
  key,
  title,
  release,
  image,
}) {
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  };
  return (
    <NavLink to={`/FilmDetails/${title}`}>
      <div className="FilmCard" key={key} style={imageStyle}>
        <div className="FilmDescription">
          <h3>{title}</h3>
          <p>{release}</p>
        </div>
      </div>
    </NavLink>
  );
}

FilmCard.propTypes = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FilmCard;

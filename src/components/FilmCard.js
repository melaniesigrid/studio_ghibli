import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function FilmCard({
  filmKey,
  title,
  release,
  image,
}) {
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
  };
  return (
    <Link to={`/FilmDetails/${filmKey}`} key={filmKey}>
      <div className="FilmCard" key={filmKey} style={imageStyle}>
        <div className="FilmDescription">
          <h3>{title}</h3>
          <p>{release}</p>
        </div>
      </div>
    </Link>
  );
}

FilmCard.propTypes = {
  filmKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FilmCard;

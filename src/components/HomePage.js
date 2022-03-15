import React from 'react';
import { useSelector } from 'react-redux';
import FilmCard from './FilmCard';
import Banner from '../assets/topImage.png';

function HomePage() {
  const films = useSelector((state) => state.logic);

  return (
    <div className="HomePage">
      <div className="BannerDiv">
        <img src={Banner} alt="Ghibli Logo" className="GhibliLogo" />
      </div>
      <div className="FilmsContainer">
        {
          films.map((film) => (
            <FilmCard
              key={film.id}
              title={film.title}
              release={film.release}
              image={film.image}
            />
          ))
        }
      </div>
    </div>
  );
}

export default HomePage;

import "./Carousel.css";
import React, { useState } from "react";
import more from "../../assets/images/cc.png";
import { Link, Outlet } from "react-router-dom";

const Carousel = ({ CharactersData }) => {
  function none() {
    let display = {
      display: "none",
    };
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex == 0 ? CharactersData.length - 1 : prevIndex - 1
    );
    console.log("activeIndex", activeIndex);
    console.log("lenghth", CharactersData.length);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % CharactersData.length);
    console.log("active", activeIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">

          <button
            className="carousel__btn carousel__btn--next carousel-btn"
            onClick={nextSlide}
          >
            &lt;
          </button>
        <div className="carousel__slide img-container">
          <img
            className="carousel-img"
            src={CharactersData[activeIndex].img}
            alt={CharactersData[activeIndex].title}
          />
          <h4 className="h4-carousel">{CharactersData[activeIndex].title}</h4>
          <Link
            to={/characters/${CharactersData[activeIndex].id}}
            className="carousel-link"
          >
            <img src={more} className="more pulse" />
            <span>معرفی</span>
          </Link>
        </div>

          <button
            className="carousel__btn carousel__btn--prev carousel-btn"
            onClick={prevSlide}
          >
            &gt;
          </button>

      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Carousel;
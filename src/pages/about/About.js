import { Container, Col, image, Row } from "react-bootstrap";
import MyNavbar from "../../compounents/navbar/Navbar";
import "./About.css";
import Footer from "../../compounents/footer/Footer";
import svgL from '../../assets/images/arrow-left-square-fill.svg';
import svgR from '../../assets/images/arrow-right-square-fill.svg';
import { useState } from "react";
import React from "react";



function About({collageInfo}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? collageInfo.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collageInfo.length);
  };
  return (
    <div className="bodyCollage" >
      <MyNavbar />
      <Container style={{ textAlign: "justify" }}>
        <div className="aboutContent">
          <div className="svgCollage">
            <img src={svgR} alt="svg" onClick={nextSlide} />
            <img
              className="collage-img"
              style={{ width: "18rem", height: "18rem" }}
              src={collageInfo[currentIndex].img}
              alt="collage"
            />
            <img src={svgL} alt="svg" onClick={prevSlide} />
          </div>
          <h2 className="nameCollage">
            {collageInfo[currentIndex].name
              ? collageInfo[currentIndex].name
              : "کالج بالیول"}
          </h2>
          <button className="collageButton" type="button">
            اطلا عات بیشتر 👇
          </button>
          <p className="textCollage" style={{ textAlign: "justify" }}>
            {collageInfo[currentIndex].info
              ? collageInfo[currentIndex].info
              : "دانشگاه آکسفورد یکی از بهترین دانشگاه های جهان محسوب می شود که شرایط ورود بسیار رقابتی دارد. این دانشگاه با دارا بودن محیطی وسیع با امکانات آموزشی و تحقیقاتی متنوع یکی از بهترین مقاصد تحصیل برای دانشجویان بین المللی به حساب می آید"}
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default About;

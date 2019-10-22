import React from 'react'
import './styles/slider.scss'
import Slider from "react-slick";

function Carousel(props) {
 
  var settings = {
    arrows: true,
   /*  dots: true, */
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const imagenes = props.carousel;
  const listimages = imagenes.map((images) => 
      <div key={images.toString()}>
        <img src={images.img} alt={images.alt} className="w-full"/>
      </div>
   
  )
    return(
      <section className="carouselImages">
        <Slider {...settings}>
              {listimages}  
        </Slider>
      </section>
    
  
    )    
  }

export default Carousel
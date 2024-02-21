import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from './images2';
import './slider.scss'; // Import your component-specific styles

const CustomSlider2 = ({children}) => {
  const settings = {
    slidesToShow: 6,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    cssEase: 'ease-out',
    initialSlide: React.Children.toArray(children).length - 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='row'>
    <div className="col-12">
      <div className="tool_slider">
        <Slider {...settings}>
            {
                images.map(image=>(
                <div key={image.imgUrl} className="slider_card">
                <img src={image.imgUrl} alt={image.title} width="100%" />
                </div>
              ))
            }
          
          {/* Repeat for other slider_card items */}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default CustomSlider2;

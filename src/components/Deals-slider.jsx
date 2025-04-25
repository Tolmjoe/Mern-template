import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/Deals-slider.css"

const DealsSlider = ({ title, images }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="deal-section">
            <h2 className="deal-title">{title}</h2>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx} className="deal-slide">
                        <img src={img} alt={`${title} ${idx}`} className="deal-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DealsSlider;

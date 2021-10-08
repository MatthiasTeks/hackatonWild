import { useEffect, useState } from "react";
import Slider from "react-slick";
import {HorsesDatas} from "../datas/HorsesDatas";
import "../styles/Horses.css";
import StatScale from "./StatScale";



let HorsesSlider = ({id, name, velocity, power, description}) => {

    const [imageIndex, setImageIndex] = useState(0);


    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 764,
              settings: {
                slidesToShow: 1,
                infinite: true,
              }
            }
        ],
        beforeChange: (current, next) => setImageIndex(next,)
    };

    return (
        <div className="sliderHorses">
            <Slider {...settings}>
                {HorsesDatas.map((img, index) => (
                        <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
                                <img src={img.horseImg} alt={img.name}/>
                                <h1>{img.name}</h1>
                                <p>{img.description}</p>
                            <div className="stats">
                                <StatScale statType="velocity" scaleValue={img.velocity} />
                                <StatScale statType="power" scaleValue={img.power} />
                            </div>
                        </div>
                ))}
            </Slider>
        </div>
    );
}

export default HorsesSlider
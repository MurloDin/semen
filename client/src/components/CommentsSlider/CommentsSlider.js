import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CommentsSlider.scss";
import {getComments} from "../../services/agency-api";

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
};

const CommentsSlider = () => {

    const [comments, setComments] = useState([{author: 'qwe', rating: 3, comment: "asd"}]);
    useEffect(async () => {
        console.log("cc", comments)
        const data = await getComments()
        setComments(data)
    }, [])

    return (
        <Slider {...settings}>
            {
                comments.map((item, idx) => {
                    return (
                        <section className="slider-card">
                            <div className="slider-card__comment">"{item.comment}"</div>
                            <div className="slider-card__author">— {item.author}</div>
                        </section>
                    )
                })
            }
        </Slider>
    );
};


export default CommentsSlider;

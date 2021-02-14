import React from "react";
import { Link } from 'react-router-dom'

import "./CommentsSection.scss";
import CommentsSlider from "../../CommentsSlider";


const CommentsSection = () => {
    return (
        <section className="comments-section" id="forth-section">
            <div className="container">
                <div className="subtitle">отзывы</div>
                <div className="title">Счастливые клиенты</div>
                <div className="word-shadow">Отзывы</div>
                <Link to='/new-comment'>
                    <button className="comments-section__btn">
                        Написать отзыв
                    </button>
                </Link>

                <div className="asd">
                    <CommentsSlider />
                </div>
            </div>
        </section>
    );
};


export default CommentsSection;

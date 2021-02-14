import React from "react";
import "./PersonCard.scss";
import {useInView} from "react-intersection-observer";



const PersonCard = ({imagePath, name, job, desc, idx}) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    return (
        <section className={`person-card person-card__anim ${inView && `active${idx}`}`} ref={ref}>
            <img
                src={imagePath}
                alt="profile_photo"
                className="person-card__img"
            />
            <div className="person-card__name">{name}</div>
            <div className="person-card__job">{job}</div>
            <div className="person-card__desc">{desc}</div>
            <div className="person-card__btn-wrapper">
                <a href="vk.com" target="_blank">
                    <i className="icon-twitter-bird icon"/>
                </a>
                <a href="vk.com" target="_blank">
                    <i className="icon-facebook icon"/>
                </a>
                <a href="vk.com" target="_blank">
                    <i className="icon-odnoklassniki icon"/>
                </a>
            </div>
        </section>
    );
};


export default PersonCard;

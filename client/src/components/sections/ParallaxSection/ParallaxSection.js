import React from "react";
import "./ParallaxSection.scss";
import {Link} from "react-scroll";


const ParallaxSection = () => {
    return (
        <section className="parallax-section">
            <div className="parallax-section__parallax-img">
                <div className="parallax__dark-bg"></div>
                <div className="parallax-section__text-wrapper">
                    <div className="parallax-section__title">Присоединяйтесь и путешествуйте с нами</div>
                    <div className="parallax-section__desc">
                        Lorem Ipsum является текст-заполнитель обычно
                        используется в графических, печать и издательской индустрии для предварительного
                        просмотра макета и визуальных макетах.
                    </div>
                </div>
                <Link
                    to="fifth-section"
                    spy={true}
                    smooth={true} duration={500}
                    style={{zIndex: "10000"}}
                >
                    <button className="parallax-section__btn">
                        Связаться
                    </button>
                </Link>
            </div>
        </section>
    );
};


export default ParallaxSection;

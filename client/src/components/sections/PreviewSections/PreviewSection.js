import React from "react";
import "./PreviewSection.scss";
import {useInView} from "react-intersection-observer";
import {Link} from "react-scroll";


const PreviewSection = () => {
    const {ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (
        <section className="preview-section" ref={ref}>
            <div className="dark-bg"></div>
            <div className="container">
                <div className="col-5">
                    <div className={`content-wrapper preview-wrapper_left ${inView && "active"}`}>
                        <div className="preview-section__title">Наслаждаемся чудесами природы</div>
                        <div className="preview-section__desc">
                            Наше туристическое агентсво поможет вам погрузиться в мир приключений без каких-либо
                            заморочек, свяжитесь с нами.
                        </div>
                        <Link
                            to="fifth-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-header__link"
                        >
                            <button className="preview-section__btn">
                                Связаться
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PreviewSection;

import React from "react";
import "./ImagesLine.scss";
import {useInView} from "react-intersection-observer";


const ImagesLine = ({items, price = 500}) => {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <section className={`images-line images-line__anim ${inView && "active"}`} ref={ref}>
            {
                items.map((item, idx) => {
                    return (
                        <div className="col-4" key={idx}>
                            <div className="images-line__wrapper">
                                <img
                                    src={item.imagePath}
                                    alt="picture"
                                    className="images-line__img"
                                />
                                <div className="images-line__text-wrapper">
                                    <div className="images-line__title">{item.title}</div>
                                    <button className="images-line__btn">От 500р</button>
                                </div>

                            </div>

                        </div>
                    )
                })
            }
        </section>
    );
};

export default ImagesLine;

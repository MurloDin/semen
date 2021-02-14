import React from "react";
import "./StorySection.scss";
import {useInView} from 'react-intersection-observer';


const StorySection = () => {
    const {ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 0,
    });
    console.log(inView)
    return (
        <section className="story-section" ref={ref} id="first-sections">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={`content-wrapper story-wrapper_left ${inView && "active"}`}>
                            <div className="subtitle">раскрытие истории</div>
                            <div className="title">Наша История</div>
                            <div className="word-shadow">история</div>
                            <div className="story-section__desc">
                                Мы оказываем услуги туристическго агенства с 2002, с тех времён мы приобрели много опыта
                                и постояных клиентов, мы реализуем все ваши давне мечты связанные с
                                путишествиями.<br/><br/>
                                Trips - мир где сбываются мечты.
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={`content-wrapper story-wrapper_right ${inView && "active"}`}>
                            <img
                                src="/images/traveler.jpg"
                                alt="traveler"
                                className="story-section__img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default StorySection;

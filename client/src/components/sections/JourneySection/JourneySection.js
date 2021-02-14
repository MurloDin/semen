import React from "react";
import "./JourneySection.scss";
import ImagesLine from "../../ImagesLine";


const JourneySection = () => {
    return (
        <section className="journal-section" id="second-section">
            <div className="container">
                <div className="journal-section__wrapper">
                    <div className="subtitle" style={{textAlign: "center"}}>Поездка</div>
                    <div className="title" style={{textAlign: "center"}}>Ваше путешествие начинается здесь</div>
                    <div className="word-shadow" style={{fontSize: "100px", textAlign: "center"}}>Поездка</div>
                    <div className="row">
                        <ImagesLine items={[
                            {
                                imagePath: "/images/img_1.jpg",
                                title: "Отдых в Норвегии"
                            },
                            {
                                imagePath: "/images/img_2.jpg",
                                title: "Отдых в Финляндии"
                            },
                            {
                                imagePath: "/images/img_3.jpg",
                                title: "Отдых в дании"
                            }]
                        }/>
                    </div>
                    <div className="row">
                        <ImagesLine items={[
                            {
                                imagePath: "/images/img_4.jpg",
                                title: "Отдых в Австралии"
                            },
                            {
                                imagePath: "/images/img_5.jpg",
                                title: "Отдых на Бали"
                            },
                            {
                                imagePath: "/images/img_6.jpg",
                                title: "Отдых в Швеции"
                            }]
                        }/>
                    </div>
                </div>

            </div>
        </section>
    );
};


export default JourneySection;

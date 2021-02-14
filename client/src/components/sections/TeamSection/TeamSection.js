import React from "react";
import "./TeamSection.scss";
import PersonCard from "../../PersonCard";


const TeamSection = () => {
    return (
        <section className="team-section" id="third-section">
            <div className="container">
                <div className="subtitle">Восхитительные сотрудники</div>
                <div className="title">Познакомьтесь с нашей командой</div>
                <div className="word-shadow">Наша команда</div>
                <div className="row">
                    <div className="col-4">
                        <PersonCard
                            name="Виталий Цаль"
                            idx={0}
                            desc="Величайший работник всех времён, из Винници, первый человек апнувший 7к ммр"
                            imagePath="/images/person_1.jpg"
                            job="Project manager"
                        />
                    </div>
                    <div className="col-4">
                        <PersonCard
                            idx={1}
                            name="Илья Коробкин"
                            desc="Лучший морф в мире"
                            imagePath="/images/person6.png"
                            job="ZXC"
                        />
                    </div>
                    <div className="col-4">
                        <PersonCard
                            idx={2}
                            name="Кирилл Зырянов"
                            desc="Top gamer in the world, лучший гид в Голандии"
                            imagePath="/images/person_4.jpg"
                            job="VJlink"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TeamSection;

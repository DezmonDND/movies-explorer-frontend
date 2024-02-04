import React from "react";
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about">
            <div className="about__container">
                <h2 className="about__title">О проекте</h2>
                <div className="about__descriptions">
                    <div className="about__description">
                        <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about__subtitle-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about__description">
                        <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="about__subtitle-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about__timeline">
                    <p className="about__timeline about__timeline_time about__timeline_1-week">1 неделя</p>
                    <p className="about__timeline about__timeline_time about__timeline_4-week">4 недели</p>
                    <p className="about__timeline about__timeline_type">Back-end</p>
                    <p className="about__timeline about__timeline_type">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
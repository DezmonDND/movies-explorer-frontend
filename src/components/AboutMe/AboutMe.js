import React from "react";
import './AboutMe.css';
import myFoto from '../../images/my_foto.png'

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__container">
                <h2 className="aboutMe__title">Студент</h2>
                <div className="aboutMe__descriptions">
                    <div className="aboutMe__info">
                        <h3 className="aboutMe__name">Виталий</h3>
                        <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
                        <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a className="aboutMe__link" href="https://github.com/DezmonDND" target="blank">Github</a>
                    </div>
                    <img className="aboutMe__foto" src={myFoto} alt="Фотография студента"></img>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
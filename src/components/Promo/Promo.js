import React from "react";
import './Promo.css';
import promoLogo from "../../images/promo__logo.svg"

function Promo() {
    return (
        <section className="promo">
            <div className="promo__about">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a className="promo__link" href="/">Узнать больше</a>
            </div>
            <img className="promo__logo" src={promoLogo} alt="Логотип земля"></img>
        </section>
    );
}

export default Promo;
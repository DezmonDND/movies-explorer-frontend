import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__info">
                <p className="footer__date">© 2024</p>
                <ul className="footer__links">
                    <li className="footer__element">
                        <a className="footer__link" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__element">
                        <a className="footer__link" href="https://github.com/DezmonDND" target="blank">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
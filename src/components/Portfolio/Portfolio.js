import React from "react";
import './Portfolio.css';
import linkImage from '../../images/link_image.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <a className="portfolio__link-name" href="https://github.com/DezmonDND/how-to-learn?tab=readme-ov-file" target="blank">
                        Статичный сайт
                        <img className="portfolio__link-image" src={linkImage} alt="Значок ссылки"></img>
                    </a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__link-name" href="https://dezmondnd.github.io/russian-travel" target="blank">
                        Адаптивный сайт
                        <img className="portfolio__link-image" src={linkImage} alt="Значок ссылки"></img>
                    </a>
                </li>
                <li className="portfolio__link">
                    <a className="portfolio__link-name" href="https://github.com/DezmonDND/react-mesto-api-full-gha" target="blank">
                        Одностраничное приложение
                        <img className="portfolio__link-image" src={linkImage} alt="Значок ссылки"></img>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
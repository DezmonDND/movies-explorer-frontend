import React from "react";
import './Main.css';
import Promo from '../Promo/Promo'
import AboutProject from "../AboutProject/AboutProject";
import Techs from '../Techs/Techs'
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio"
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function Main() {
    return (
        <section className="main">
            {/* <NotFoundPage></NotFoundPage> */}
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
        </section>
    );
}

export default Main;
import React from "react";
import { Link } from "react-scroll";

import "./Header.scss";


const Header = () => {
    return (
        <header className="page-header">
            <div className="container">
                <nav className="page-header__navigation-wrapper">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="page-header__logo"
                    />
                    <ul className="page-header__navigation">
                        <li className="page-header__navigation-item">
                            <Link
                                to="first-section"
                                spy={true}
                                smooth={true} duration={500}
                                className="page-header__link"
                            >
                                Про нас
                            </Link>
                        </li>
                        <li className="page-header__navigation-item">
                            <Link
                                to="second-section"
                                spy={true}
                                smooth={true} duration={500}
                                className="page-header__link"
                            >
                                Поездки
                            </Link>
                        </li>
                        <li className="page-header__navigation-item">
                            <Link
                                to="third-section"
                                spy={true}
                                smooth={true} duration={500}
                                className="page-header__link"
                            >
                                Команда
                            </Link>
                        </li>
                        <li className="page-header__navigation-item">
                            <Link
                                to="forth-section"
                                spy={true}
                                smooth={true} duration={500}
                                className="page-header__link"
                            >
                                Отзывы
                            </Link>
                        </li>
                        <li className="page-header__navigation-item">
                            <Link
                                to="fifth-section"
                                spy={true}
                                smooth={true} duration={500}
                                className="page-header__link"
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


export default Header;

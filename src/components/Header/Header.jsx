import React from 'react';
import logo from "../../assets/netflix-logo.png"
import avatar from "../../assets/avatar.jpg"
import style from "./Header.module.css"


const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeft}>
                <div className={style.headerLogo}>
                <img className={style.headerLogoImage} src={logo} alt="Netflix" />
                </div>
                <span className={style.headerDivider}></span>
                <div className={style.headerDate}>
                <span>Friday July 8th</span>
                </div>
            </div>

            <div className={style.headerRight}>
                <button className={style.headerSearch}></button>
                <div className={style.headerAvatar}>
                    <img className={style.headerAvatarImage} src={avatar} alt="Avatar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
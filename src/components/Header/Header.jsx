import React from 'react';
import PropTypes from 'prop-types';
import FormattedDate from '../FormattedDate';

import logo from "../../assets/netflix-logo.png"
import avatar from "../../assets/avatar.jpg"
import style from "./Header.module.css"



const Header = ({ isLogin = false }) => {
    return (
        <header className={style.header}>
            <div className={style.headerLeft}>
                <div className={style.headerLogo}>
                <img className={style.headerLogoImage} src={logo} alt="Netflix" />
                </div>
                <span className={style.headerDivider}></span>
                <FormattedDate />
            </div>
             <div className={style.headerRight}>
                <button className={style.headerSearch}></button>
                {isLogin ? 
                    (<div className={style.headerAvatar}>
                        <img className={style.headerAvatarImage} src={avatar} alt="Avatar" />
                    </div>
                    ): 
                    (<button className={style.headerLogin}>Login</button>)
                }
            </div>
        </header>
    );
};

Header.propTypes = {
    isLogin: PropTypes.bool
}

export default Header;
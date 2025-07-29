import React from 'react';

const Header = () => {
    return (
       <header class='header'>
            <div class="header__left">
                <div class="header__logo">
                    <img class="header__logo-image" alt='Netflix'/>
                </div>
                <span class="header__divider">|</span>
                <div class="header__date">
                    <span>
                        Friday July 8th
                    </span>
                </div>
            </div>
            <div class="header__right">
                <button class="header__search">Search</button>
                <div class="header__avatar">
                    <img class="header__avatar-image" alt='Avatar' />
                </div>
            </div>
       </header>
    );
};

export default Header;
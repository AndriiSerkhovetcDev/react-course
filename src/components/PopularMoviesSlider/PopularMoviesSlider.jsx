import React from 'react';
import PropTypes from 'prop-types';

import style from "./PopularMoviesSlider.module.css"
import breakingBadImg from "../../assets/netflix-slide-1.jpg"
import rainSlideImg from "../../assets/netflix-slide-2.jpg"
import lifeYearImg from "../../assets/netflix-slide-3.jpg"
import moneyHeistImg from "../../assets/netflix-slide-4.jpg"
import squidGameImg from "../../assets/netflix-slide-5.jpg"


const PopularMoviesSlider = ({ title = '' }) => {
    
    return (
        <div className={style.moviesSlider}>
            <div className={style.movieSliderControlls}>
                <p className={style.moviesSliderTitle}>{title}</p>
                <div className={style.movieSliderButtons}>
                    <button className={`${style.movieSliderButton} `}>
                        <svg className={style.arrowBack} width="25" height="25" viewBox="0 0 12 12" fill="none">
                            <path d="M8 2L4 6L8 10" strokeWidth="1" fill="none" />
                        </svg>
                    </button>
                    <button className={`${style.movieSliderButton} ${style.movieSliderButtonActive}`}>
                         <svg className={style.arrowForward} width="25" height="25" viewBox="0 0 12 12" fill="none">
                            <path d="M8 2L4 6L8 10" strokeWidth="1" fill="none" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className={style.moviesSliderTrack}>
                <div className={style.moviesSliderItem}>
                    <img className={style.moviesSliderItemImg} src={breakingBadImg} alt="breaking bad" />
                </div>
                <div className={style.moviesSliderItem}>
                    <img className={style.moviesSliderItemImg} src={rainSlideImg} alt="rain" />
                </div>
                <div className={style.moviesSliderItem}>
                    <img className={style.moviesSliderItemImg} src={lifeYearImg} alt="life year" />
                </div>
                <div className={style.moviesSliderItem}>
                    <img className={style.moviesSliderItemImg} src={moneyHeistImg} alt="money heist" />
                </div>
                <div className={style.moviesSliderItem}>
                    <img className={style.moviesSliderItemImg} src={squidGameImg} alt="squid game" />
                </div>
            </div>
        </div>
    );
};

PopularMoviesSlider.propTypes = {
    title: PropTypes.string
}


export default PopularMoviesSlider;
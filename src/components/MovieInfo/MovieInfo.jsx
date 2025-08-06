import React from 'react';
import PropTypes from 'prop-types';

import style from "./MovieInfo.module.css"

const MovieInfo = ({ title, year, director, seasons, descriptions }) => {  
    return (
        <div className={style.movieInfo}>
            <h1 className={style.movieTitle}>{title}</h1>
            <p className={style.movieInfoDetails}>
                <span className={style.movieInfoYear}>{year}</span>
                <span className={style.movieInfoSeparator}></span>
                <span className={style.movieInfoDirector}>
                    <span className={style.movieInfoDirectorLabel}>director:</span>
                    <span className={style.movieInfoDirectorName}>{director}</span>
                </span>
                <span className={style.movieInfoSeparator}></span>
                <span className={style.movieInfoSeasons}>
                    <span className={style.movieInfoSeasonsLabel}>seasons:</span>
                    <span className={style.movieInfoSeasonsValue}>{seasons}</span>
                </span>
            </p>

            <p className={style.movieInfoDescription}>{descriptions}</p>
        </div>    
    );
};

MovieInfo.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    director: PropTypes.string,
    seasons: PropTypes.string,
    descriptions: PropTypes.string
}

MovieInfo.defaultProps = {
    title: '',
    year: 0,
    director: '',
    seasons: '',
    descriptions: ''
};

export default MovieInfo;

import React from 'react';
import PropTypes from 'prop-types';

import style from "./MovieGenres.module.css"


const MovieGenres = ({ genres = [] }) => { 
    return (
        <div className={style.movieGenres}>
            <span className={style.movieGenresItems}>
                Drama
                <span className={style.movieGenreSeperator}></span>
                Thriller
                <span className={style.movieGenreSeperator}></span>
                Supernatural
            </span>
        </div>
    );
};

MovieGenres.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default MovieGenres;
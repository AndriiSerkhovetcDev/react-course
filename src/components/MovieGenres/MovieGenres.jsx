import React from 'react';
import style from "./MovieGenres.module.css"

const MovieGenres = () => { 
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

export default MovieGenres;
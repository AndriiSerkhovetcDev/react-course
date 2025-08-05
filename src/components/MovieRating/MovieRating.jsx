import React from 'react';
import style from "./MovieRating.module.css"

const MovieRating = () => {

    return (
        <div className={style.movieRating}>
            <span className={style.movieRatingStar}>★</span>
            <span className={style.movieRatingStar}>★</span>
            <span className={style.movieRatingStar}>★</span>
            <span className={`${style.movieRatingStar} ${style.empty}`}>★</span>
            <span className={`${style.movieRatingStar} ${style.empty}`}>★</span>
        </div>
    );
};

export default MovieRating;
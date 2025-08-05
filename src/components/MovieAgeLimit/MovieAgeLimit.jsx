import React from 'react';
import style from "./MovieAgeLimit.module.css"

const MovieAgeLimit = () => {
    return (
        <div className={style.movieAgeLimit}>
             <span className={style.movieAgeLimitValue}>16+</span>
        </div>
    );
};

export default MovieAgeLimit;
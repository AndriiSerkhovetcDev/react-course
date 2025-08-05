import React from 'react';
import style from "./MovieInfo.module.css"

const MovieInfo = () => {  
    return (
        <div className={style.movieInfo}>
            <h1 className={style.movieTitle}>Stranger Things</h1>
            <p className={style.movieInfoDetails}>
                <span className={style.movieInfoYear}>2019</span>
                <span className={style.movieInfoSeparator}></span>
                <span className={style.movieInfoDirector}>
                    <span className={style.movieInfoDirectorLabel}>director:</span>
                    <span className={style.movieInfoDirectorName}>Shawn Levy</span>
                </span>
                <span className={style.movieInfoSeparator}></span>
                <span className={style.movieInfoSeasons}>
                    <span className={style.movieInfoSeasonsLabel}>seasons:</span>
                    <span className={style.movieInfoSeasonsValue}>3 (5 Episodes)</span>
                </span>
            </p>

            <p className={style.movieInfoDescription}>
                In 1980s Indiana, a group of young friends witness supernatural forces
                and secret government exploits. As they search for answers, the children unravel
                a series of extraordinary mysteries.
            </p>
        </div>    
    );
};

export default MovieInfo;

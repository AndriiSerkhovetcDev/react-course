import React from 'react';
import PropTypes from 'prop-types';

import style from "./MovieGenres.module.css"


const MovieGenres = ({ genres = [] }) => { 
    return (
        <div className={style.movieGenres}>
            {Array.isArray(genres) && genres.length > 0 ? (
                genres.map((genre, index) =>  {
                    const isLast = index === genres.length - 1;

                    return (
                        <span key={index} className={style.movieGenresItems}>
                            {genre}
                            {!isLast && <span className={style.movieGenreSeperator}></span>}
                        </span>
                    )
                })
            ) : (
                <p>Genres is not found</p>
            )}
        </div>
    );
};

MovieGenres.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default MovieGenres;
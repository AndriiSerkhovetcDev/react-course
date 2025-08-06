import React from 'react';
import PropTypes from 'prop-types';

import style from "./MovieRating.module.css"

const MovieRating = ({ rating = 1 }) => {
    const ratingLength = 5;
    const movieRating = Array.from({length: ratingLength}, (_, index) => {
        return index < rating ? true : false
    })

    return (
        <div className={style.movieRating}>
            {movieRating.map((star, index) => 
                star ? (
                    <span key={index} className={style.movieRatingStar}>★</span>
                ) : (
                    <span key={index} className={`${style.movieRatingStar} ${style.empty}`}>★</span>
                )
            ) }
        </div>
    );
};

MovieRating.propTypes = {
    rating: PropTypes.number
}

export default MovieRating;
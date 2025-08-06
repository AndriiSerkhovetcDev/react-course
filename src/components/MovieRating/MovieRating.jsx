import React from 'react';
import PropTypes from 'prop-types';

import style from "./MovieRating.module.css"

const MovieRating = ({ rating = 1 }) => {
    const ratingLength = 5;
    const movieRating = Array.from({length: ratingLength}, (_, index) => {
        return index < rating ? true : false
    })

    const handlerCLickStart = () => {
        alert("New rating saved")
    }

    return (
        <div className={style.movieRating}>
            {movieRating.map((star, index) => 
                star ? (
                    <button 
                        key={index}
                        className={style.movieRatingStar}
                        onClick={handlerCLickStart}>
                            ★
                    </button>
                ) : (
                    <button
                        key={index}
                        className={`${style.movieRatingStar} ${style.empty}`}
                        onClick={handlerCLickStart}>
                            ★
                    </button>
                )
            ) }
        </div>
    );
};

MovieRating.propTypes = {
    rating: PropTypes.number
}

export default MovieRating;
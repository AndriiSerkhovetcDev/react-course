import React from 'react';

const MovieRating = () => {
    return (
        <div class="movie-rating">
            <span class="movie-rating__star">&#9733;</span>
            <span class="movie-rating__star">&#9733;</span>
            <span class="movie-rating__star">&#9733;</span>
            <span class="movie-rating__star movie-rating__star--empty">&#9733;</span>
            <span class="movie-rating__star movie-rating__star--empty">&#9733;</span>
        </div>
    );
};

export default MovieRating;
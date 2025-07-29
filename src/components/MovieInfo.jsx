import React from 'react';

const MovieInfo = () => {  
    return (
        <div class="movie-info">
            <p class="movie-info__details">
                <span class="movie-info__year">2019</span>
                <span class="movie-info__separator">|</span>
                <span class="movie-info__director">
                    <span class="movie-info__director-label">director:</span>
                    <span class="movie-info__director-name">Shawn Levy</span>
                </span>
                <span class="movie-info__separator">|</span>
                <span class="movie-info__seasons">
                    <span class="movie-info__seasons-label">seasons:</span>
                    <span class="movie-info__seasons-value">3 (5 Episodes)</span>
                </span>

            </p>

            <p class="movie-info__description">
                In 1980s Indiana, a group of young friends witness supernatural forces
                and secret government exploits. As they search for answers, the children unravel
                a series of extraordinary mysteries.
            </p>
        </div>    
    );
};

export default MovieInfo;

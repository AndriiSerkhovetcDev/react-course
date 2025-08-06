import React from 'react';
import PropTypes from 'prop-types';

import style from "./MovieAgeLimit.module.css"

const MovieAgeLimit = ({ limit = '0+' }) => {
    return (
        <div className={style.movieAgeLimit}>
             <span className={style.movieAgeLimitValue}>{limit}</span>
        </div>
    );
};

MovieAgeLimit.propTypes = {
    limit: PropTypes.string
}

export default MovieAgeLimit;
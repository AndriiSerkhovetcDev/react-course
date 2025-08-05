import React from 'react';
import style from "./MovieAction.module.css"

const MovieActions = () => {
    return (
        <div className={style.movieActions}>
            <button className={style.movieActionsStream}>stream now</button>
            <button className={style.movieActionsEpisodes}>all episodes</button>  
        </div>
    );
};

export default MovieActions;
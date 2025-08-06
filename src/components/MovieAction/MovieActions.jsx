import React from 'react';
import style from "./MovieAction.module.css"

const MovieActions = () => {
    const handlerStreamNow = () => {
        alert("Watch movie")
    }

    const handlerShowEpisodes = () => {
        alert("Show episodes")
    }

    return (
        <div className={style.movieActions}>
            <button className={style.movieActionsStream} onClick={handlerStreamNow}>stream now</button>
            <button className={style.movieActionsEpisodes} onClick={handlerShowEpisodes}>all episodes</button>  
        </div>
    );
};

export default MovieActions;
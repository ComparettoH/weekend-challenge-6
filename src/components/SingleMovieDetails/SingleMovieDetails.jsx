import { on } from 'nodemon';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SingleMovieDetails () {
    const dispatch = useDispatch();
    const oneMovie = useSelector(store => store.oneMovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE'})
    }, [])
    
    return (
        <div>
            <h1>Movie Details</h1>
            <img src={oneMovie.poster} alt={oneMovie.title}/>
            <h3>{oneMovie.title}</h3>
            <p>{oneMovie.description}</p>
        </div>
    )

}

export default SingleMovieDetails;
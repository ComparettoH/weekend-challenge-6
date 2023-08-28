import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SingleMovieDetails () {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    
    return (
        <div>
        <h3>{movies.title}</h3>
            <img src={movies.poster} alt={movies.title}/>
        </div>
    )

}

export default SingleMovieDetails;
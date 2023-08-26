import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SingleMovieDetails () {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    
    return (
        <h1>In Single Movie View</h1>
    )

}

export default SingleMovieDetails;
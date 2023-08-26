import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';


function MovieDetails () {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>In Movie Details!</h1>
        </div>
    )
}

export default MovieDetails;
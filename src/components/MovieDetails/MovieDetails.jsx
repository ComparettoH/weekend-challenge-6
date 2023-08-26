import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MovieDetails () {
    const dispatch = useDispatch();
    const history = useHistory()

    const backHome = () => {
        history.push('/');
    }

    return (
        <main>
            <button onClick={backHome}>Back to List</button>
            <h1>In Movie Details!</h1>
        </main>
    )
}

export default MovieDetails;
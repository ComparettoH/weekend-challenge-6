import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails.jsx';


function MovieDetails () {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres)
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    console.log('in movie detail and listing genres',genres)

    const backHome = () => {
        history.push('/');
    }

    return (
        <main>
            <header>
            <button onClick={backHome}>Back to List</button>
            <h1>In Movie Details List!</h1>
            </header>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <img src={movie.poster} alt={movie.title}/>
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                        </div>
                    );
                })}
            </section>
        </main>
    )
}

export default MovieDetails;
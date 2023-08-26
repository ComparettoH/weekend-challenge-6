import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function MovieDetails () {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory()

    const backHome = () => {
        history.push('/');
    }

    return (
        <main>
            <header>
            <button onClick={backHome}>Back to List</button>
            <h1>In Movie Details!</h1>
            </header>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>
    )
}

export default MovieDetails;
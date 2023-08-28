import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const location = useLocation('localhost:3000/#/')
    const params = new URLSearchParams(location.search)
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //makes movie image clickable
    const goToDescription = () => {
        console.log('poster clicked!');
        {params.get(`details/:.toString(${movies.id})`)};
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img key={movie.id}onClick={goToDescription} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
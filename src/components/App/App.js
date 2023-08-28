import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Single Movie Details page */}
        <Route path='/details/:id' exact>
          <SingleMovieDetails />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
        <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;

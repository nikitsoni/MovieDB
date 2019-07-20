import React, {useState, useEffect} from 'react';
import './App.css';
import Movies from './Component/Movies.js';
import Logo from './Component/Logo.js'




function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("A");

  useEffect(() => {
    getMovies();
  }, [query]);

  const Api_Key = '42bfd1346cf9179e370e7ff86464917f';

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&query=${query}`);
      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    };

    const updateSearch = event => {
      setSearch(event.target.value);
    };

    const getSearch = event => {
      event.preventDefault();
      setQuery(search);
      setSearch('');
    };



    

  return (
    <div>
      <div className="App">
      <div className="nav-bar">
              <Logo />
              <form  onSubmit={getSearch} className='form' >
                  <input className='search-input'  value={search} onChange={updateSearch} type='text' />
                  <button className='submit-btn' type='submit'>Submit</button>
              </form>    
        </div>
          <div className='movies'>
          {movies.map(movie => (
            <Movies
            key = {movie.id}
            title = {movie.original_title}
            poster = {movie.poster_path}
            date = {movie.release_date} />
          ))}
          </div>
      </div>
    </div>
  );
}

export default App;

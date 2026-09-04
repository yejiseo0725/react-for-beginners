import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(`https://movies-api.accel.li/api/v2/list_movies.json?sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies()
  }, []);

  console.log(movies);
  
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt="movie-cover-img" />
            <h2>{movie.title}</h2>
            <strong>{movie.year}</strong>
            <p>{movie.summary}</p>
            <ul>
              <li>{movie.genres.map(g => <li key={g}>{g}</li>)}</li>
            </ul>
          </div>
        ))}
        </div>
      }
      </div>
  )
}

export default App;
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(`https://movies-api.accel.li/api/v2/list_movies.json?sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies()
  }, []);
  
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
    </div>
  )
}

export default App;
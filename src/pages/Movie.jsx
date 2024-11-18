import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/api/movie/${id}`)
      .then((r) => r.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;

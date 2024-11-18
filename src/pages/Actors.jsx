import React, { useEffect, useState } from "react";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("/api/actors")
      .then((r) => r.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
